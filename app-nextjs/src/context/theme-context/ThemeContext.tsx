import * as React from 'react'
import { createContext, FC, useContext, useEffect, useMemo, useState } from 'react'
import { COLOR_MODE_KEY, COLORS, INITIAL_COLOR_MODE_CSS_PROP } from './ThemeConfig'

interface Context {
    colorMode: string | undefined;
    setColorMode: (newValue: string) => void;
}

type Props = {
    children: React.ReactNode;
}

const ContextRef = createContext<Context | undefined>(undefined);

export const MyThemeProvider: FC<Props> =
    (
        {
            children,
        }
    ) =>
    {
        const [colorMode, rawSetColorMode] = useState<string | undefined>(undefined);

        useEffect(() => {
            const root = window.document.documentElement;

            // Because colors matter so much for the initial page view, we're
            // doing a lot of the work in next-ssr. That way it can happen before
            // the React component tree mounts.
            const initialColorValue = root.style.getPropertyValue(
                INITIAL_COLOR_MODE_CSS_PROP
            );
            const mql = window.matchMedia('(prefers-color-scheme: dark)')
            const prefersDarkFromMQ = mql.matches
            const colorMode = prefersDarkFromMQ ? 'dark' : 'light'
            rawSetColorMode(colorMode);
            //rawSetColorMode(initialColorValue);
        }, []);

        const contextValue = useMemo(() => {
            function setColorMode(newValue: string) {
                const root = window.document.documentElement;

                localStorage.setItem(COLOR_MODE_KEY, newValue);

                Object.entries(COLORS).forEach(([name, colorByTheme]) => {
                    const cssVarName = `--color-${name}`;

                    root.style.setProperty(cssVarName, colorByTheme[newValue]);
                });

                rawSetColorMode(newValue);
            }

            return {
                colorMode,
                setColorMode,
            };
        }, [colorMode, rawSetColorMode]);

        return <ContextRef.Provider value={contextValue}>
                    {children}
            </ContextRef.Provider>




    };

function useThisContext()
{
    const context = useContext(ContextRef);
    return useMemo(() => {
        if (context === undefined)
            throw new Error(
                'Trying to use ThemeContext outside of ThemeProvider'
            );
        return context;
        }, [context]
    );
}

export function useDarkMode() {
    const { colorMode, setColorMode } = useThisContext();

    return {
        colorMode,
        setColorMode,
    };
}

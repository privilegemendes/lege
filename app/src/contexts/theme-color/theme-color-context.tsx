import * as React from 'react';
import {createContext, FC, useContext, useLayoutEffect} from 'react';

type Color = string | undefined;

const ContextRef = createContext<Color | undefined>(undefined);

type Props = {
    color?: string
};

export const ThemeColorProvider: FC<Props> =
    (
        {
            children,
            color,
        }
    ) =>
    {
        const parentColor = useContext(ContextRef);
        useLayoutEffect(
            () => {
                if (color !== undefined) {
                    if (parentColor !== undefined) {
                        const meta = document.head.querySelector('[name="theme-color"]') as HTMLMetaElement;
                        meta.content = color;
                        return () => {
                            meta.content = parentColor;
                        };
                    } else {
                        const metaElement = (() => {
                            const element = document.createElement('meta');
                            element.name = 'theme-color';
                            element.content = color;
                            return element;
                        })();
                        document.head.appendChild(metaElement);
                        return () => {
                            document.head.removeChild(metaElement);
                        };
                    }
                }
            },
            [color, parentColor],
        );
        return <ContextRef.Provider value={color}>
            {children}
        </ContextRef.Provider>
    };

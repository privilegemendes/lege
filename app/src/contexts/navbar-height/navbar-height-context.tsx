import * as React from 'react';
import {createContext, FC, useContext, useMemo} from 'react';
import {useMediaQuery, useTheme} from "@mui/material";


interface Context
{
    navBarHeight: number
}

const ContextRef = createContext<Context | undefined>(undefined);

export const NavBarHeightProvider: FC =
    (
        {
            children,
        },
    ) =>
    {
        const theme = useTheme();
        const mdOrUp = useMediaQuery(theme.breakpoints.up('md'));
        const navBarHeight = useMemo(
            () => mdOrUp
                ?
                50
                :
                44,
            [mdOrUp],
        );
        return <ContextRef.Provider value={useMemo(() => ({
            navBarHeight: navBarHeight,
        }), [navBarHeight])}>
            {children}
        </ContextRef.Provider>;
    };

function useThisContext()
{
    const context = useContext(ContextRef);
    return useMemo(
        () => {
            if (context === undefined)
                throw new Error(
                    'Trying to use nav bar height outside of NavBarHeightProvider'
                );
            return context;
        },
        [context],
    );
}

export function useNavBarHeight()
{
    return useThisContext().navBarHeight;
}
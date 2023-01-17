import * as React from 'react';
import {FC, useMemo} from 'react';
import {createTheme, CssBaseline, MuiThemeProvider, useMediaQuery} from "@material-ui/core";
import {TypographyStyleOptions} from "@material-ui/core/styles/createTypography";

export const ThemeProvider: FC =
    (
        {
            children,
        },
    ) =>
    {
        const useDark = useMediaQuery('@media (prefers-color-scheme: dark)');
        console.log(`dark mode: ${useDark}`)
        const theme = useMemo(
            () => {
                const textNotSelectable = {
                    userSelect: 'none',
                    cursor: 'default',
                } as TypographyStyleOptions;
                return createTheme({
                    typography: {
                        body1: textNotSelectable,
                        body2: textNotSelectable,
                        h1: textNotSelectable,
                        h2: textNotSelectable,
                        h3: textNotSelectable,
                        h4: textNotSelectable,
                        h5: textNotSelectable,
                        h6: textNotSelectable,
                        caption: textNotSelectable,
                        subtitle1: textNotSelectable,
                        subtitle2: textNotSelectable,
                    },
                    palette: {
                        type: useDark ? 'dark' : 'light',
                        background: {
                            default: useDark ? '#202020' : '#fff',
                            paper: useDark ? '#303030' : '#fff',
                        },
                        // text: {
                        //     primary: '#fff',
                        //     secondary: '#ddd',
                        // },
                        // primary: {
                        //     main: green[500],
                        // },
                        // secondary: {
                        //     main: blue[500],
                        // },
                    },
                });
            },
            [useDark]
        );
        return <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </MuiThemeProvider>;
    };
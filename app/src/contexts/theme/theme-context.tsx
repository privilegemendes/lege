import * as React from 'react';
import {FC, useMemo} from 'react';
import {createTheme, CssBaseline, ThemeProvider as MuiThemeProvider, useMediaQuery} from "@mui/material";
import {TypographyStyleOptions} from "@mui/material/styles/createTypography";

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
                        mode: useDark ? 'dark' : 'light',
                        contrastThreshold: 4.5, // accessibility WCAG 2.1 Rule 1.4.3
                        background: {
                            default: useDark ? 'rgba(18,18,18,0.91)' : '#fff',
                            paper: useDark ? '#121212' : '#fff',
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
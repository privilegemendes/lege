import * as React from 'react';
import {FC, useMemo} from 'react';
import {createTheme, CssBaseline, ThemeProvider as MuiThemeProvider, useMediaQuery} from "@mui/material";
import {TypographyStyleOptions} from "@mui/material/styles/createTypography";
import {blue, green} from "@mui/material/colors";

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
                        background: {
                            default: useDark ? '#303030' : '#fff',
                            paper: useDark ? '#202020' : '#fff',
                        },
                        primary: {
                            main: green[500],
                        },
                        secondary: {
                            main: blue[500],
                        },
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
import React, {FC} from "react";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "../../contexts/theme/theme-context";
import {CreateNonogramPage} from "../nonogram-create-page/create-nonogram-page";
import {NavBarHeightProvider} from "../../contexts/navbar-height/navbar-height-context";
import {AuthenticationProvider} from "../../contexts/authentication/authentication-context";
import {Console} from "../console-viewer/Console";


export const Root: FC = () => {
    return <React.StrictMode>
        <Console/>
        <BrowserRouter>
            <AuthenticationProvider>
                <NavBarHeightProvider>
                    <ThemeProvider>
                        <CreateNonogramPage/>
                    </ThemeProvider>
                </NavBarHeightProvider>
            </AuthenticationProvider>
        </BrowserRouter>
    </React.StrictMode>;
}
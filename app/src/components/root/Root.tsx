import React, {FC} from "react";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "../../contexts/theme/theme-context";
import {NavBarHeightProvider} from "../../contexts/navbar-height/navbar-height-context";
import {AuthenticationProvider} from "../../contexts/authentication/authentication-context";
import {Console} from "../console-viewer/Console";
import {ProfilePage} from "../profile-page/ProfilePage";


export const Root: FC = () => {
    return <React.StrictMode>
        <Console/>
        <BrowserRouter>
            <AuthenticationProvider>
                <NavBarHeightProvider>
                    <ThemeProvider>
                        <ProfilePage/>
                        {/*<CreateNonogramPage/>*/}
                    </ThemeProvider>
                </NavBarHeightProvider>
            </AuthenticationProvider>
        </BrowserRouter>
    </React.StrictMode>;
}
import React, {FC} from "react";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "../../contexts/theme/theme-context";
import {CreateNonogramPage} from "../nonogram-create-page/create-nonogram-page";
import {FirestoreAuthContext} from "../../contexts/firestore-auth/firestore-auth-context";
import {NavBarHeightProvider} from "../../contexts/navbar-height/navbar-height-context";


export const Root: FC = () => {
    return <React.StrictMode>
            <BrowserRouter>
                <FirestoreAuthContext>
                    <NavBarHeightProvider>
                        <ThemeProvider>
                            <CreateNonogramPage/>
                        </ThemeProvider>
                    </NavBarHeightProvider>
                </FirestoreAuthContext>
            </BrowserRouter>
    </React.StrictMode>;
}
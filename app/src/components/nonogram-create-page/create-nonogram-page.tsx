import {FC} from "react";
import {PageContentContainer} from "../page-content-container/PageContentContainer";
import {CreateNonogram} from "./create-nonogram";
import {AppBar} from "../app-bar/AppBar";


export const CreateNonogramPage: FC = () => {
    return<>
        <AppBar/>
        <PageContentContainer title="Create Nonogram">
            <CreateNonogram/>
        </PageContentContainer>
    </>
}
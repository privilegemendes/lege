import {FC} from "react";
import {PageContentContainer} from "../page-content-container/PageContentContainer";
import {CreateNonogram} from "./create-nonogram";
import {Navbar} from "../navbar/Navbar";


export const CreateNonogramPage: FC = () => {
    return<>
        <Navbar/>
        <PageContentContainer>
            <CreateNonogram/>
        </PageContentContainer>

    </>
}
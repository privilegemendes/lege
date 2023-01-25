import {FC} from "react";
import {PageContentContainer} from "../page-content-container/PageContentContainer";
import {CreateNonogram} from "./create-nonogram";
import {NavbarBottom} from "../navbar-bottom/NavbarBottom";


export const CreateNonogramPage: FC = () => {
    return<>

        <PageContentContainer>
            <CreateNonogram/>
        </PageContentContainer>
        <NavbarBottom/>

    </>
}
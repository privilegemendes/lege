import {FC} from "react";
import {PageContentContainer} from "../page-content-container/PageContentContainer";
import {CreateNonogram} from "./create-nonogram";
import {Navbar} from "../navbar/Navbar";
import {NavbarBottom} from "../navbar-bottom/NavbarBottom";


export const CreateNonogramPage: FC = () => {
    return<>

        <PageContentContainer>
            <Navbar/>
            <CreateNonogram/>
            <NavbarBottom/>
        </PageContentContainer>

    </>
}
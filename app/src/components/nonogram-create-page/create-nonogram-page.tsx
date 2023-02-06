import {FC} from "react";
import {PageContentContainer} from "../page-content-container/PageContentContainer";
import {CreateNonogram} from "./create-nonogram";


export const CreateNonogramPage: FC = () => {
    return<>

        <PageContentContainer>
            <CreateNonogram/>
        </PageContentContainer>
    </>
}
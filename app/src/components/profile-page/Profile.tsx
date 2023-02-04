import {FC} from "react";
import {Theme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {About} from "./About";
import {MastHead} from "./MastHead";


const useStyles = makeStyles<Theme>((theme) => {
    return ({
        main:{
          height: '100%',
        }
    });
});

export const Profile: FC = () => {
    const classes = useStyles();

    return <div className={classes.main}>
            <MastHead/>
            <About/>
        </div>
}
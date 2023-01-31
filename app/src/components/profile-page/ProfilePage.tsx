import {FC} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {Profile} from "./Profile";
import {Footer} from "./Footer";

const useStyles = makeStyles<Theme>((theme) => ({
   root:{
       margin: 0,
       padding: 0,
       overflow: 'hidden',
       height: '100%',
       maxWidth: 1000
   }
}));


export const ProfilePage:FC = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <Profile/>
        <Footer/>
    </div>
}

import {FC} from "react";
import logo from '../../assets/logo-final.svg';
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles<Theme>((theme) => ({
 appBar: {
     '& > logo': {

     },
     [theme.breakpoints.down('sm')]: {
         marginLeft: -10,
         padding: '30px 20px 25px',
         boxShadow: '0 2px 10px 0 #0000',
         webkitBoxShadow: '0 2px 10px 0 #0000',
         border: '1px solid #222',
         flexWrap: 'wrap',
         '& > logo': {
             marginLeft: -30,
         }
     },
    },
    logoLink:{
     margin: '0 20px'
    }

}));



export const AppBar: FC = () => {

    const classes = useStyles();
    return <div className={classes.appBar}>
        <NavLink
            activeClassName="active"
            exact
            to="/"
            className={classes.logoLink}
        >
            <img src={logo} alt="logo" />
        </NavLink>

    </div>
};
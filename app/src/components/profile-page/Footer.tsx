import {FC} from "react";
import logo from '../../assets/logo.svg';
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {NavLink} from "react-router-dom";
import twitterLogo from "../../assets/icons/twitter.svg";
import gitHubLogo from "../../assets/icons/github.svg";

const useStyles = makeStyles<Theme>((theme) => ({
    footer: {
        backgroundColor: '#141618',
        position: 'relative',
        color: '#fff',
        textAlign: 'center',
        width: '100vw',
        padding: '50px 8vw 30px',
        '& > div': {
            marginBottom: 30,
        },
        '& > hr':{
            opacity: 0.1,
            marginBottom: 30,
        },
        '& > p':{
            marginBottom: 30,
            opacity: 0.7,
        },
    },
    logoLink:{
        margin: '0 20px'
    },
    logo:{
        width: 50,
        height: 50,
    },
    socialLinks:{
        display: 'inline-block',
        paddingRight: 15,
        color: 'white',
        '& > a':{
            opacity: 0.5,
            webKitTransition: 'all 0.25s ease',
            transition: 'all 0.25s ease',

        },
        '& > a:hover':{
            opacity: 1,
        },
    },
    siteLinks:{
        marginBottom: 30,
        color: 'white',
        '& > ul':{
            fontWeight: 500,
            paddingLeft: 0,
            listStyle: 'none',
            textTransform: 'uppercase',
            fontSize: 20,
            marginTop: 3,
            opacity: 0.8,
            '& > li':{
                display: 'inline-block',
                paddingRight: 15,
            }
        },
    }

}));



export const Footer: FC = () => {

    const classes = useStyles();
    return <div className={classes.footer}>
        <NavLink
            activeClassName="active"
            exact
            to="/"
            className={classes.logoLink}
        >
            <img src={logo}
                 alt="logo"
                 className={classes.logo}
            />
        </NavLink>
        <div className={classes.siteLinks}>
            <ul >
                <li>
                    <a href="/about">about</a>
                </li>
                <li>
                    <a href="/resume">resume</a>
                </li>
                <li>
                    <a href="/projects">projects</a>
                </li>
            </ul>
        </div>
        <hr/>
        <p>legemendes.com © Privilege Mendes 2023</p>
        <div className={classes.socialLinks}>
            <a href="https://www.twitter.com/privilegemendes/"
               id="twitter"  rel="noreferrer">
                <img src={twitterLogo} alt="Twitter"/>
            </a>
            <a href="https://www.github.com/privilegemendes/"
               id="github"  rel="noreferrer">
                <img src={gitHubLogo} alt="GitHub"/>
            </a>
        </div>
    </div>
};
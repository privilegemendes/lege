import {FC} from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import twitterLogo from "../../assets/icons/twitter.svg";
import gitHubLogo from "../../assets/icons/github.svg";
import ProfilePhoto from "../../assets/me.jpeg";
import Eindhoven from "../../assets/eindhoven.svg";

const useStyles = makeStyles<Theme>((theme) => ({
    aboutRoot:{
        width: '100vw',
        height: 700,
        background: `url(${Eindhoven}) center center no-repeat #141618`,
        backgroundSize: 'cover',
        padding: 100,
        margin: 0,
        boxSizing: 'border-box',
        '& > h2':{
            marginBottom: 20,
            fontWeight: 500,
            color: '#fff',
            textTransform: 'uppercase',
            fontSize: 40,
        },
        [theme.breakpoints.down('xl')]: {
            padding: '8vmin',
            height: 'auto',
        }

    },
    about: {
        width: '45vw',
        padding: '40px 40px 80px',
        background: `rgba(0, 0, 0, 0.4)`,
        lineHeight: 1.7,
        borderLeft: '1px solid rgba(255, 255, 0, 0.3)',
        [theme.breakpoints.down('xl')]: {
            padding: '6vmin 6vmin 10vmin !important',
            width: 'calc(90vw - 8vmin)',
        }
    },
    profilePhoto: {
        borderRadius: '50% 50%',
        boxShadow: '0 0 0 1px #0000',
        webBoxShadow: '0 0 0 1px #0000',
        float: 'left',
        margin: '10px 30px 30px 10px',
        opacity: 0.7
    }
    ,
    logoLink:{
        margin: '0 20px'
    },
    logo:{
        width: 50,
        height: 50,
    },
    socialLinks:{
        float: 'right',
        '& > a':{
            opacity: 0.5,
            webKitTransition: 'all 0.25s ease',
            transition: 'all 0.25s ease',

        },
        '& > a:hover':{
            opacity: 1,
        },
        display: 'inline-block',
        paddingRight: 15,
        color: 'white',
    }
}));



export const About: FC = () => {

    const classes = useStyles();
    return <div className={classes.aboutRoot}>
        <h2 id="about">About me</h2>
        <div className={classes.about}>
            <img
                className={classes.profilePhoto}
                src={ProfilePhoto}
                width="100"
                height="100"
                alt={"Privilege Mendes"}
            />
            <p>
                I'm a software engineer with a passion for creating things.
            </p>
            <div className={classes.socialLinks}>
                <a href="https://www.twitter.com/privilegemendes/"
                   id="twitter"  rel="noreferrer">
                    <img src={twitterLogo} alt={twitterLogo}/>
                </a>
                <a href="https://www.github.com/privilegemendes/"
                   id="github"  rel="noreferrer">
                    <img src={gitHubLogo} alt={gitHubLogo}/>
                </a>
            </div>
        </div>
    </div>
};
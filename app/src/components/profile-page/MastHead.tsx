import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import React, {FC, useState} from "react";
import Stars from "../../assets/bk-stars3.svg";
import {Roses} from "./Roses";


const useStyles = makeStyles<Theme>((theme: Theme) => ({
    mastHead: {
        width: '100vw',
        background: `url(${Stars}) center center no-repeat #141618`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    "@keyframes glitch-before": {
        "0%": {
            clip: 'rect(36px, 9999px, 9px, 0)',
        },
        "25%": {
            clip: 'rect(25px, 9999px, 99px, 0)',
        },
        "50%": {
            clip: 'rect(50px, 9999px, 102px, 0)',
        },
        "75%": {
            clip: 'rect(20px, 9999px, 92px, 0)',
        },
        "to": {
            clip: 'rect(100px, 9999px, 98px, 0)',
        },
    },
    "@keyframes glitch-after": {
        "0%": {
            top: -1,
            left: 1,
            clip: 'rect(65px, 9999px, 119px, 0)',
        },
        "25%": {
            top: -8,
            left: 2,
            clip: 'rect(79px, 9999px, 19px, 0)'
        },
        "50%": {
            top: -3,
            left: 2,
            clip: 'rect(68px, 9999px, 11px, 0)'
        },
        "75%": {
            top: 0,
            left: -2,
            clip: 'rect(95px, 9999px, 53px, 0)'
        },
        "to": {
            top: -1,
            left: -4,
            clip: 'rect(31px, 9999px, 149px, 0)'
        },
    },
    glitchSection: {
        position: 'relative',
        zIndex: 100,
        height: 'calc(100vh - 120px)',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100vw',
        padding: '8vmin 12vmin 8vmin 8vmin',
        '& > h1 ': {
            //marginTop: -90,
            textTransform: 'uppercase',
            fontSize: 'calc(18vmin + 8*(100vw - 400px)/ 400)',
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1000,
            textAlign: 'center'
        },
    },
    glitch: {
        position: 'relative',
        color: 'white',
        mixBlendMode: 'lighten',
        clip: 'rect(0, 0, 0, 0)',
        '&::before': {
            content: 'attr(data-text)',
            position: 'absolute',
            top: 0,
            background: '#141618',
            width: '100%',
            left: -1,
            textShadow: '4px 0 rgba(255, 0, 0, 0.7)',
            animation: `$glitch-before 0.8s ease-in-out infinite alternate-reverse`,
        },
        '&::after': {
            content: 'attr(data-text)',
            position: 'absolute',
            top: 0,
            background: '#141618',
            width: '100%',
            left: 1,
            textShadow: '-7px 0 rgba(0, 0, 255, 0.7)',
            animation: `$glitch-after 1s ease-in-out infinite alternate-reverse`,
        },
    },

}));

export const MastHead: FC = () => {
    const classes = useStyles();

    const [isBroken, setIsBroken] = useState<boolean>(false);

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement | MouseEvent>) => {
        event.preventDefault();
        setIsBroken(true);
    }
    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement | MouseEvent>) => {
        event.preventDefault();
        setIsBroken(false);
    }


    return <div className={classes.mastHead}>
            <div className={classes.glitchSection}>
                <h1
                    className={classes.glitch}
                    data-text={isBroken ? "I Break Stuff" : "I Build Stuff"}
                    onMouseEnter={event => handleMouseEnter(event)}
                    onMouseLeave={event => handleMouseLeave(event)}
                >
                    I {isBroken ? <span> Break </span> : <span> Build </span> } Stuff
                </h1>
                 <Roses isBroken={isBroken}/>
            </div>
        </div>
}
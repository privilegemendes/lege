import {FC} from "react";
import {Theme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {About} from "./About";
import {Contact} from "./Contact";
import Stars from "../../assets/bk-stars3.svg";


const useStyles = makeStyles<Theme>((theme) => {
    return ({
        canvasRoot: {
            width: '100vw',
            background: `url(${Stars}) 50% no-repeat #141618`,
            backgroundSize: 'cover',
        },
        canvas: {
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            zIndex: 0,
            top: 0,
            left: 0,
        },
        "@keyframes glitchLoop1": {
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
        "@keyframes glitchLoop2": {
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
            '& > h1': {
                marginTop: -90,
                textTransform: 'uppercase',
                fontSize: 'calc(18vmin + 8 * (10vw + 400px) / 400)',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 1000,
                textAlign: 'center'
            }
        },
        glitch: {
            position: 'relative',
            color: 'white',
            mixBlendMode: 'lighten',
            '& :before': {
                content: 'attr(data-text)',
                position: 'absolute',
                top: 0,
                left: -1,
                textShadow: '4px 0 rgba(255, 0, 0, 0.7)',
                width: '100%',
                background: '#141618',
                clip: 'rect(0,0,0,0)',
                animation: `$glitchLoop1 0.8s ease-in-out infinite
          alternate-reverse`,
            },
            '& :after': {
                content: 'attr(data-text)',
                position: 'absolute',
                top: 0,
                left: 1,
                textShadow: '-7px 0 rgba(0, 0, 255, 0.7)',
                width: '100%',
                background: '#141618',
                clip: 'rect(0,0,0,0)',
                animation: `$glitchLoop2 1s ease-in-out infinite
          alternate-reverse`,
            }

        },
        main:{
          height: '100%',
          margin: '8vmin'
        }
    });
});

export const Profile: FC = () => {
    const classes = useStyles();

    return <main className={classes.main}>
            <div className={classes.canvasRoot}>
                <section className={classes.glitchSection}>
                    <h1 className={classes.glitch} data-text="I Make Things">
                        I
                        <span data-text="Make">Make</span>
                        Things
                    </h1>
                    <canvas id="canvas" className={classes.canvas}/>
                </section>
            </div>
            <About/>
            <Contact/>
        </main>
}
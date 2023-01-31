import {FC} from "react";
import {Theme} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles<Theme>((theme) => ({
    contactRoot: {
        width: '100vw',
        height: 700,
        background: `#141618`,
        backgroundSize: 'cover',
        padding: 100,
        [theme.breakpoints.down('xl')]: {
            display: 'flex',
            padding: '8vmin',
            justifyContent: 'center',
            height: 'auto',
        }

    },
    hidden: {
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: 0,
    },
    'button[type=submit]': {
        background: '#44f',
        border: 'none',
        color: '#fff',
    },
    formArea:{
        paddingTop: 30,
        '& > error':{
            textTransform: 'uppercase',
            fontSize: 14,
            color: '#e28a9d',
            position: 'absolute',
            lineHeight: 1.3,
            marginTop: -20,
            fontFamily: 'Sans-serif',
        },
        '& > submitError':{
            paddingTop: 30,
        },
        [theme.breakpoints.down('xl')]: {
            marginRight: 0,
            float: 'none',
            padding: '3vmin 3vmin 6vmin',
            background: '0 0',
        }
    }
}));

export const Contact: FC = () => {
    const classes = useStyles();
    return <div className={"contactRoot"}>
        <div className={classes.formArea}>
            <h2>Say Hello</h2>
            <br/>
            <form method="POST" name="contact">
                <input type="hidden" value={"contact"}/>
                <p className={classes.hidden}>
                    <label>Don’t fill this out if you're human:
                        <input name="bot-field"/>
                    </label>
                </p>
                <p>
                    <label>Your Name:
                        <br/>
                        <input type="text" name="name"/>
                    </label>
                </p>
                <p>
                    <label>Your Email:
                        <br/>
                        <input type="email" name="email"/>
                    </label>
                </p>
                <p>
                    <label>Message:
                        <br/>
                        <textarea name="message" rows={5}
                        />
                    </label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    </div>
}

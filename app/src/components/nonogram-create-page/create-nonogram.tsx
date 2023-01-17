import {FC} from "react";

import StopIcon from '@mui/icons-material/Stop';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';

import {Button, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {DrawCanvas} from "./nonogram-creator/draw-canvas";

const useStyles = makeStyles(theme => ({
    buttons: {
        align: 'center',
    }
}));

export const CreateNonogram: FC = () => {

    const classes = useStyles();
    return <>
        <DrawCanvas/>
        <div className={classes.buttons}>
            <Button>
                <StopOutlinedIcon/>
            </Button>
            <Button>
                <StopIcon/>
            </Button>
        </div>

        <Typography>Single click to fill or empty cell</Typography>
        <p>Single click to fill or empty cell.<br />To Draw a line starting on the desired cell hold your mouse button down,<br />move horizontally or vertically to the desired end point, and release the mouse button.<br /><br /></p>
    </>
}

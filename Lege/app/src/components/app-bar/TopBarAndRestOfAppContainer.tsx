import * as React from 'react';
import {FC} from 'react';
import {makeStyles} from "@material-ui/core";
import {MAX_SITE_WIDTH} from "../../env-vars";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        width: '100%',
        maxWidth: MAX_SITE_WIDTH,
        backgroundColor: theme.palette.background.default,
        height: '100%',
        overflowY: 'hidden',
    },
}));

export const TopBarAndRestOfAppContainer: FC =
    (
        {
            children,
        },
    ) =>
    {
        const classes = useStyles();
        return <div className={classes.root}>
            {children}
        </div>;
    };
import * as React from 'react';
import {FC} from 'react';
import {makeStyles} from "@mui/styles";
import {Fade} from "@mui/material";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '25%',
        minWidth: 200,
        maxWidth: 500,
        zIndex: 100,
    },
    menu: {
        width: 'calc(100% - 4px)',
        position: 'absolute',
        top: 4,
        right: 4,

        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    clickAwayListener: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
    },
}));

interface UserTrayMenuProps
{
    open: boolean
    onClose: () => void
}

export const UserTrayMenu: FC<UserTrayMenuProps> =
    (
        {
            open,
            onClose,
            children,
        },
    ) =>
    {
        const classes = useStyles();
        return <>
            <div
                className={classes.clickAwayListener}
                style={{
                    display: open ? undefined : 'none',
                }}
                onClick={onClose}
            />
            <div className={classes.root}>
                <Fade in={open}>
                    <div className={classes.menu}>
                        {children}
                    </div>
                </Fade>
            </div>
        </>;
    };
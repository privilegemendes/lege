import * as React from 'react';
import {FC, useCallback, useState} from 'react';
import {MenuItem, Theme, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {GoogleUser, useSignOutCallback, useUser} from "../../../contexts/firestore-auth/firestore-auth-context";
import {UserTrayMenu} from "./UserTrayMenu";
import {UserAvatar} from "./UserAvatar";

const useStyles = makeStyles<Theme>(theme => ({
    button: {
        margin: 8,
    },
    avatarInMenu: {
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 'auto',
        marginRight: 4,
    },
    menuHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgb(0,0,0,0.04)'
    },
    menuHeaderUserName: {
        margin: '8px 16px',
        userSelect: 'none',
    },
}));

export const CurrentUserTray: FC =
    () =>
    {
        const user = useUser();
        const [open, setOpen] = useState(false);
        const onClickButton = useCallback(() => {
            setOpen(true)
            console.log('open')
        }, []);
        const onCloseMenu = useCallback(() => {
            setOpen(false)
            console.log('close')
        }, []);
        const signOut = useSignOutCallback();
        const classes = useStyles();
        if (user === null)
            return null;
        console.log((user as GoogleUser).providerData[0])
        return <>
            <UserAvatar
                className={classes.button}
                onClick={onClickButton}
            />
            <UserTrayMenu open={open} onClose={onCloseMenu}>
                <div className={classes.menuHeader}>
                    <Typography className={classes.menuHeaderUserName}>
                        {(user as GoogleUser).displayName}
                    </Typography>
                    <UserAvatar className={classes.avatarInMenu}/>
                </div>
                <MenuItem onClick={signOut}>Sign out</MenuItem>
            </UserTrayMenu>
        </>;
    };
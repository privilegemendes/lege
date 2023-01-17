import * as React from 'react';
import {FC, useMemo} from 'react';
import {GoogleUser, useUser} from "../../../contexts/firestore-auth/firestore-auth-context";
import classNames from "classnames";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

interface StylesProps
{
    photoUrl: string
    clickable: boolean
}

const useStyles = makeStyles<Theme, StylesProps>(theme => ({
    root: ({photoUrl, clickable}) => ({
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundImage: `url(${photoUrl})`,
        backgroundSize: 'cover',
        cursor: clickable ? 'pointer' : undefined,
        border: '1px solid black',
        boxSizing: 'border-box',
        backgroundColor: '#fff'
    }),
}));

interface UserAvatarProps
{
    onClick?: () => void
    className?: string
}

export const UserAvatar: FC<UserAvatarProps> =
    (
        {
            onClick,
            className,
        }
    ) =>
    {
        const user = useUser();
        const photoUrl = useMemo(() => {
            const providerData = (user as GoogleUser).providerData;
            if (providerData !== undefined && providerData.length > 0)
            {
                return providerData[0].photoURL;
            }
        }, [user]);
        if (!photoUrl)
        {
            return null;
        }
        return <Inner onClick={onClick} className={className} photoUrl={photoUrl}/>;
    };

interface InnerProps
{
    onClick?: () => void
    className?: string
    photoUrl: string
}

export const Inner: FC<InnerProps> =
    (
        {
            onClick,
            photoUrl,
            className,
        }
    ) =>
    {
        const classes = useStyles({photoUrl, clickable: onClick !== undefined});
        return <div
            onClick={onClick}
            className={classNames(classes.root, className)}
        />
    }
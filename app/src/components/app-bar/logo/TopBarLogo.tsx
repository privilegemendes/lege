import * as React from 'react';
import {FC} from 'react';
import {makeStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {useRouteMatch} from "react-router";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
    root: {
        alignSelf: 'stretch',
        padding: '8px 16px',
        margin: 0,
        textTransform: 'uppercase',
        fontSize: '16px',

        display: 'flex',
        alignItems: 'center',

        userSelect: 'none',
        textDecoration: 'none',
        color: 'inherit',

        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)'
        },
    },
    rootActive: {
        pointerEvents: 'none',
        cursor: 'default',
    },
}));

interface TopBarLogoProps
{
}

export const TopBarLogo: FC<TopBarLogoProps> =
    (
        {
            children,
        },
    ) =>
    {
        const classes = useStyles();
        const routActive = useRouteMatch({
            path: '/',
            exact: true,
        }) !== null;
        return <Link
            to="/"
            className={classNames(classes.root, routActive ? classes.rootActive : undefined)}
        >
            Lege
        </Link>;
    };
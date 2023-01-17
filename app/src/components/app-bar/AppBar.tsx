import * as React from 'react';
import {FC} from 'react';
import {makeStyles, Theme} from "@material-ui/core";
import {TopBarLogo} from "./logo/TopBarLogo";

import {useNavBarHeight} from "../../contexts/navbar-height/navbar-height-context";
import {MAX_SITE_WIDTH} from "../../env-vars";

interface StylesProps {
    topBarHeight: number
}

const useStyles = makeStyles<Theme, StylesProps>(theme => ({
    placeholder: ({topBarHeight}) => ({
        flex: '0 0 auto',
        alignSelf: 'stretch',
        height: topBarHeight,
    }),
    topBarOuter: ({topBarHeight}) => ({
        position: 'fixed',
        left: 0,
        right: 0,
        [theme.breakpoints.up(1441)]: {
            top: 19,
        },
        [theme.breakpoints.down(1441)]: {
            top: 0,
        },
        height: topBarHeight,
        zIndex: 1000,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'stretch',
    }),
    topBarInner: {
        flex: '1 1 auto',
        margin: '0px auto',
        [theme.breakpoints.up(1441)]: {
            maxWidth: 1396,
        },
        [theme.breakpoints.down(1441)]: {
            maxWidth: MAX_SITE_WIDTH,
        },
        position: 'relative',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: () => {
            return theme.palette.type === 'dark'
                ? '#303030'
                : '#fff';
        },
        height: '100%',
        overflowY: 'hidden',

        [theme.breakpoints.up('sm')]: {
            paddingRight: 20,
        },
        [theme.breakpoints.down('sm')]: {
            paddingRight: 17,
        },
        '& > :first-child': {
            marginRight: 'auto',
        },
        '& > :not(:first-child):not(:last-child)': {
            marginRight: 8,
        },
    },
    spacer: {
        flex: '1 1 auto',
    },
    signInButton: {
        marginLeft: 8,
        marginRight: 0,
    },
}));

export const AppBar: FC =
    (
        {
            children,
        },
    ) =>
    {
        const topBarHeight = useNavBarHeight();
        const classes = useStyles({topBarHeight});
        return <>
            <div className={classes.placeholder}/>
            <div className={classes.topBarOuter}>
                <div className={classes.topBarInner}>
                    <TopBarLogo/>
                    {children}
                </div>
            </div>
        </>;
    };
import * as React from 'react';
import {FC} from 'react';
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import clsx from "clsx";
import {NavbarBottom} from "../navbar-bottom/NavbarBottom";

const useStyles = makeStyles<Theme>(theme => ({
    contentCenterer: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '4fr 0.5fr',
        height: '100vh',
        // width: '100%',
        minWidth: 300,
        [theme.breakpoints.up('sm')]: {
            display: 'grid',
            gridTemplateColumns: '1fr 4fr',
            gridTemplateRows: '1fr',
            // height: '100%',
            // width: '100%',
        },
        gridColumnGap: 0,
        gridRowGap: 0,

    },
    contentContainer: {
        gridArea: '1/1/2/2',
        overflow: 'hidden', /* Hide scrollbars */
        // width: '100%',
        // height: '70%',
        [theme.breakpoints.up('sm')]: {
            maxWidth: 800,
            gridArea: '1/2/2/3',
            // width: '70%',
            // height: '100%',
        }
    },
    navBar: {
        gridArea: '2/1/3/2',
        overflow: 'hidden', /* Hide scrollbars */
        background: 'linear-gradient(to bottom,#131321 0%, #1f1c2c 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        [theme.breakpoints.up('sm')]: {
            gridArea: '1/1/2/2',
        },
    }
}));

interface Props
{
    title?: string
    classes?: {
        inner?: string
    }
}

export const PageContentContainer: FC<Props> =
    (
        {
            title,
            children,
            classes: {
                inner,
            } = {},
        }
    ) =>
    {
        const classes = useStyles();
        return <div className={classes.contentCenterer}>
            <NavbarBottom className={classes.navBar}/>
            <div className={clsx(inner, classes.contentContainer)}>
                {children}
            </div>
        </div>;
    };
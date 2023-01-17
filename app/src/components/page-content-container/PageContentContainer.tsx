import * as React from 'react';
import {FC} from 'react';
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import {Theme} from "@mui/system";
import clsx from "clsx";

const useStyles = makeStyles<Theme>(theme => ({
    contentCenterer: {
        marginTop: 24,
        marginBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'calc(100% - 32px)',
            minWidth: 600,
            maxWidth: 800,
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'calc(100% - 32px)',
            maxWidth: 600,
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
    },
    title: {
        marginBottom: 8,
    },
    contentContainer: {
        backgroundColor: '#001E3C',
        marginLeft: -16,
        marginRight: -16,
        padding: '12px 16px',
        borderRadius: 4,
        alignSelf: 'stretch',
        position: 'relative',
    },
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
            {title && <Typography color="textPrimary" variant="h6" className={classes.title}>{title}</Typography>}
            <div className={clsx(inner, classes.contentContainer)}>
                {children}
            </div>
        </div>;
    };
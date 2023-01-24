import * as React from 'react';
import {FC} from 'react';
import {makeStyles} from "@mui/styles";
import {Theme, Typography} from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles<Theme>(theme => ({
    contentCenterer: {
        boxSizing: 'border-box',
        marginTop: 4,
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.up('md')]: {

        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
    },
    title: {
        marginBottom: 8,
    },
    contentContainer: {
        //background: 'radial-gradient(ellipse at center,#192d38 0,#211f2f 100%)',
        borderRadius: 4,
        alignSelf: 'stretch',
        position: 'relative',
        overflow: 'hidden', /* Hide scrollbars */
        // display: 'grid',
        // gridTemplateColumns: '1fr',
        // gridTemplateRows: '0.5fr 4fr 0.5fr',
        // gridColumnGap: 0,
        // gridRowGap: 0,
        // "& > first-child": {
        //     gridArea: '1/1/2/2',
        // },
        // "& > last-child": {
        //     gridArea: '4/1/5/2',
        // }
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
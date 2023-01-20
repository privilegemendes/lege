import {Theme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import clsx from "clsx";
import {CSSProperties, FC} from 'react';
import {NavLink} from 'react-router-dom';
import logoSvg from "../../assets/logo-final.svg";
import {useNavBarHeight} from "../../contexts/navbar-height/navbar-height-context";

type StylesProps = {
    navBarHeight: number
}

const useStyles = makeStyles<Theme, StylesProps>(theme => ({
    bar: ({navBarHeight}) => ({
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid rgb(98,95,95)',
        height: navBarHeight,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 17,
            paddingRight: 17,
        },
        zIndex: 1000,
        overflowX: 'hidden',
        '& > :first-child': {
            marginRight: 'auto',
        },
        '& > :nth-child(2)': {
            marginLeft: 'auto',
        },
        '& > :not(:first-child):not(:last-child)': {
            marginRight: 24,
        },
    }),
    logoLink: {
        lineHeight: 0,
    },
    logo: {
        marginLeft: -1,
        height: 50,
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    popper: {
        zIndex: 2000,
    },
    rightNavigationButtonContainer: {},
    userTrayContainer: {
        marginRight: -2,
        transition: 'opacity 0.2s',
    },
}));

type Props = {
    style?: CSSProperties
    className?: string
    hideTopRightButtons?: boolean
    hideShoppingCartTray?: boolean
}

export const Navbar: FC<Props> =
    (
        {
            style,
            className,
            hideTopRightButtons = false,
        }
    ) =>
    {
        const navBarHeight = useNavBarHeight();
        const classes = useStyles({navBarHeight});

        return <div
            className={clsx(classes.bar, className)}
            style={style}
        >
            <NavLink
                activeClassName="active"
                exact
                to="/"
                className={classes.logoLink}
            >
                <img
                    src={logoSvg}
                    className={classes.logo}
                    alt={"logo"}
                    aria-label={"logo"}
                />
            </NavLink>
            <div
                className={classes.userTrayContainer}
                style={{
                    opacity: hideTopRightButtons ? '0' : '1',
                    pointerEvents: hideTopRightButtons ? 'none' : undefined,
                }}
            >

            </div>
        </div>
    };

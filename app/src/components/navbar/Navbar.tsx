import {AppBar, Box, IconButton, Theme, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {CSSProperties, FC} from 'react';
import {NavLink} from 'react-router-dom';
import logoSvg from "../../assets/logo-final.svg";
import {useNavBarHeight} from "../../contexts/navbar-height/navbar-height-context";
import MenuIcon from '@mui/icons-material/Menu';

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
        marginLeft: -10,
        height: 40,
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

        return <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
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
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    };



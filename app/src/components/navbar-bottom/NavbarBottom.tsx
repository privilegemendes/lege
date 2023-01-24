import {AppBar, Box, IconButton, styled, Theme, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {CSSProperties, FC} from 'react';
import {useNavBarHeight} from "../../contexts/navbar-height/navbar-height-context";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import GridOnIcon from '@mui/icons-material/GridOn';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type StylesProps = {
    navBarHeight: number
}

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

const useStyles = makeStyles<Theme, StylesProps>(theme => ({
    bar: ({navBarHeight}) => ({
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        borderTop: '1px solid rgb(98,95,95)',
        bottom: 0,
        paddingLeft: 17,
        paddingRight: 17,
        [theme.breakpoints.up('md')]: {
            paddingLeft: 20,
            paddingRight: 20,
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
}

export const NavbarBottom: FC<Props> =
    (
        {
            style,
            className,
        }
    ) =>
    {
        const navBarHeight = useNavBarHeight();
        const classes = useStyles({navBarHeight});

        return <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <IconButton color="inherit" size="large" aria-label="nonograms">
                        <GridOnIcon fontSize="large"/>
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit" size="large" aria-label="search">
                        <SearchIcon fontSize="large" />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit" size="large" aria-label="create nonogram">
                    <AddIcon fontSize="large" />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit" size="large" aria-label="scores">
                        <SportsScoreIcon fontSize="large" />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit" size="large" aria-label="profile" >
                        <AccountCircleIcon  fontSize="large"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
    };

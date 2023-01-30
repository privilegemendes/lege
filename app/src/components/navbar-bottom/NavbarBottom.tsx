import {IconButton, List, ListItem, Theme, useMediaQuery} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {CSSProperties, FC, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import GridOnIcon from '@mui/icons-material/GridOn';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import clsx from "clsx";


const useStyles = makeStyles<Theme>(theme => ({
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
    listMobile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: 'auto',
        marginBottom: 8,
    },
    listDesktop: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // paddingLeft: 8,
        // paddingRight: 8,
        // marginTop: 'auto',
        // marginBottom: 8,
    }
}));

type Props = {
    style?: CSSProperties
    className?: string
}

export const NavbarBottom: FC<Props> = (
    {
        className,
    }
) =>
    {
        const classes = useStyles();

       // const viewportWidth = useMemo(() => window.innerWidth, []);

        const [viewportWidth, setViewportWidth] = useState(getViewportWidth());

        const isMobile = useMediaQuery('(max-width:600px)');

        const list = [
            <GridOnIcon fontSize="large"/>,
            <SearchIcon fontSize="large"/>,
            <AddIcon fontSize="large"/>,
            <SportsScoreIcon fontSize="large"/>,
            <AccountCircleIcon fontSize="large"/>
        ];

        return <>
            <List className={clsx(className, isMobile ? classes.listMobile : classes.listDesktop)}>
                { list.map((item, index) => (
                    <ListItem key={index} disablePadding >
                        <IconButton size="large">
                            {item}
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </>
    };

function getViewportWidth() {
    return window.innerWidth;
}
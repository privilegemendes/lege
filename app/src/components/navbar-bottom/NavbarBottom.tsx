import {Drawer, List, ListItem, ListItemButton, ListItemIcon, Theme, useMediaQuery} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {CSSProperties, FC, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import GridOnIcon from '@mui/icons-material/GridOn';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));

type Props = {
    style?: CSSProperties
    className?: string
}

export const NavbarBottom: FC<Props> = () =>
    {
        const classes = useStyles();

       // const viewportWidth = useMemo(() => window.innerWidth, []);

        const [viewportWidth, setViewportWidth] = useState(getViewportWidth());

        const isMobile = useMediaQuery('(max-width:500px)');
        const anchor = isMobile ? 'bottom' : 'left';

        const list = [<GridOnIcon/>, <SearchIcon/>, <AddIcon/>, <SportsScoreIcon/>, <AccountCircleIcon/>];


        return <Drawer
                open={true}
                anchor={anchor}
                color="primary"
                className={classes.appBar}
                variant="permanent"
        >
                    { list.map((item, index) => (
                        <List className={isMobile ? classes.list : ""}>
                            <ListItem key={index} disablePadding >
                                <ListItemButton>
                                    <ListItemIcon sx={{fontSize:'10', justifyContent: 'center'}}>
                                        {item}
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    ))}

                    {/*<Box sx={{ flexGrow: 1 }} />*/}
                    {/*<IconButton color="inherit" size="large" aria-label="search">*/}
                    {/*    <SearchIcon fontSize="large" />*/}
                    {/*</IconButton>*/}
                    {/*<Box sx={{ flexGrow: 1 }} />*/}
                    {/*<IconButton color="inherit" size="large" aria-label="create nonogram">*/}
                    {/*<AddIcon fontSize="large" />*/}
                    {/*</IconButton>*/}
                    {/*<Box sx={{ flexGrow: 1 }} />*/}
                    {/*<IconButton color="inherit" size="large" aria-label="scores">*/}
                    {/*    <SportsScoreIcon fontSize="large" />*/}
                    {/*</IconButton>*/}
                    {/*<Box sx={{ flexGrow: 1 }} />*/}
                    {/*<IconButton color="inherit" size="large" aria-label="profile" >*/}
                    {/*    <AccountCircleIcon  fontSize="large"/>*/}
                    {/*</IconButton>*/}
            </Drawer>
    };


function getViewportWidth() {
    return window.innerWidth;
}
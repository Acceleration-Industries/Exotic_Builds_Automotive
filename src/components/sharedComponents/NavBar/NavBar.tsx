import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TuneIcon from '@mui/icons-material/Tune';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { signOut, getAuth } from 'firebase/auth';
import { theme } from '../../../Theme/themes';
import {
    Button,
    Drawer,
    ListItemButton,
    List,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Box,
    ListItemIcon,
} from '@mui/material';
const drawerWidth = 240;
const navStyles = {
    appBar: {
        backgroundColor: "#4CAF50",
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
};
export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const myAuth = localStorage.getItem('auth');
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);
    const navLinks = [
        {
            text: 'Home',
            icon: <DirectionsCarIcon />,
            onClick: () => navigate('/'),
        },
        {
            text: myAuth === 'true' ? 'Shop' : 'Sign In',
            icon: myAuth === 'true' ? <TuneIcon /> : <ExitToAppIcon />,
            onClick: () => navigate(myAuth === 'true' ? '/shop' : '/auth'),
        },
        {
            text: myAuth === 'true' ? 'Cart' : '',
            icon: myAuth === 'true' ? <ShoppingCartIcon /> : null,
            onClick: myAuth === 'true' ? () => navigate('/cart') : () => { },
        },
    ];
    let buttonText = myAuth === 'true' ? 'Sign Out' : 'Sign In';
    const signInButton = async () => {
        if (myAuth === 'false') {
            navigate('/auth');
        } else {
            await signOut(auth);
            localStorage.setItem('auth', 'false');
            localStorage.setItem('user', "");
            localStorage.setItem('uuid', "");
            navigate('/');
        }
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={open ? navStyles.appBarShift : navStyles.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={open ? navStyles.hide : navStyles.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="subtitle1" noWrap component="div" sx={{ flexGrow: 1 }}>
                        EXOTIC BUILDS AUTOMOTIVE
                    </Typography>
                    <Button color="inherit" onClick={signInButton}>{buttonText}</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Box sx={{ justifyContent: 'flex-end' }}>
                    <IconButton onClick={handleDrawerClose}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    {navLinks.map(({ text, icon, onClick }) => (
                        <ListItemButton key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

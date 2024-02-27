import { useState } from 'react';
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
    CssBaseline,
    Box
}
 from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { theme } from '../../../Theme/themes';
const drawerWidth = 200;
const navStyles = {
    appBar: {
        backgroundColor: '#00be00',
        backgroundImage: `url('/assets/images/texture_honeycomb_black.jpg'), linear-gradient(#00be00, #00be00)`,
        backgroundBlendMode: 'overlay',
        color: 'black',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        '& .MuiToolbar-root': {
            backgroundColor: 'transparent',
        },
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
        '& .MuiDrawer-paper': {
            backgroundColor: '#242625',
            color: '#00be00',
            borderColor: '#00be00',
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        width: drawerWidth,
        alignItems: 'center',
        padding: theme.spacing(1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        backgroundColor: '#00be00',
        color: 'black',
    },
    toolbar: {
        display: 'flex',
    },
    toolbarButton: {
        marginLeft: 'auto',
        color: theme.palette.primary.contrastText,
    },
    signInStack: {
        position: 'absolute',
        top: '20%',
        right: '50px',
    }
}
export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);
    const navLinks = [
        { text: 'Home', icon: <CottageIcon />, onClick: () => navigate('/') },
        { text: 'Shop', icon: <ShoppingBagIcon />, onClick: () => navigate('/shop') },
        { text: 'Cart', icon: <ShoppingCartIcon />, onClick: () => navigate('/cart') },
    ];
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={open ? navStyles.appBarShift : navStyles.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={open ? navStyles.hide : navStyles.menuButton}
                    >
                        <ShoppingBasketIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: 'black' }}>
                        EXOTIC BUILDS AUTOMOTIVE
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ marginRight: '20px' }}>
                        Sign In
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={navStyles.drawer}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Box sx={navStyles.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ShoppingBasketIcon style={{ color: 'black' }} />
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    {navLinks.map((item) => (
                        <ListItemButton key={item.text} onClick={item.onClick}>
                            {item.icon}
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

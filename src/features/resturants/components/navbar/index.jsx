import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import { SvgIcon } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LangaugeDropDown } from '../../../../components/shared/layout/navbar/langaugeDropDown';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../cart/hooks/cart';
import { userInfoStorage } from '../../../auth/storage';
import Button from '@mui/material/Button';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: alpha(theme.palette.background.default),
    },
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        width: '100%',
        marginRight: theme.spacing(5),
        maxWidth: '500px'
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function ResturantNavbar() {
    const navigate = useNavigate();
    const theme = useTheme();
    const { getUniqueCartItemCount, cartList } = useCart();
    const user = userInfoStorage.get();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={() => { handleMenuClose(); navigate('/profile'); }}>Profile</MenuItem>
            <MenuItem onClick={() => { handleMenuClose(); navigate('/profile'); }}>My account</MenuItem>
            <MenuItem onClick={() => { handleMenuClose(); navigate('/cart'); }}>Cart</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show cart items"
                    color="inherit"
                    onClick={() => navigate('/cart')}
                >
                    <Badge badgeContent={getUniqueCartItemCount(cartList)} color="error">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <LangaugeDropDown></LangaugeDropDown>
            {user ? (
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <img style={{
                            borderRadius: '8px',
                        }} src={user.avatar || '/default-avatar.png'} height='30px' alt="Profile" />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            ) : (
                <>
                    <MenuItem onClick={() => navigate('/auth/login')}>
                        <p>Login</p>
                    </MenuItem>
                    <MenuItem onClick={() => navigate('/auth/sign-up')}>
                        <p>Sign Up</p>
                    </MenuItem>
                </>
            )}
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: theme.palette.text.primary }}>
                <Toolbar>
                    <Box onClick={() => {
                        navigate('/');
                    }} sx={{ cursor: 'pointer' }}>
                        <img src='/logo.svg' height='25px' alt="Logo" />
                    </Box>
              
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search for any product"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                        <Button
                            variant="outlined"
                            sx={{ color: '#DB4444', borderColor: '#DB4444', borderRadius: 2, fontWeight: 600, mr: 2 }}
                            onClick={() => navigate('/resturants/reservation')}
                        >
                            Reservation
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ background: '#DB4444', color: '#fff', borderRadius: 2, fontWeight: 600, mr: 2 }}
                            onClick={() => navigate('/resturants/sign-up')}
                        >
                            Resturants Register
                        </Button>
                        <IconButton
                            size="large"
                            aria-label="show cart items"
                            color="inherit"
                            onClick={() => navigate('/cart')}
                        >
                            <Badge badgeContent={getUniqueCartItemCount(cartList)} color="error">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <LangaugeDropDown></LangaugeDropDown>
                        {user ? (
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <img style={{
                                    borderRadius: '8px',
                                }} src={'/static-profile.png'} height='30px' alt="Profile" />
                            </IconButton>
                        ) : (
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button color="inherit" onClick={() => navigate('/auth/login')}>Login</Button>
                                <Button color="inherit" onClick={() => navigate('/auth/sign-up')}>Sign Up</Button>
                            </Box>
                        )}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}

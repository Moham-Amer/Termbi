import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import { SvgIcon } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { LangaugeDropDown } from './langaugeDropDown';
import { useLogoutMutation } from '../../../../features/auth/services/mutations';
import { appRoutes } from '../../../../routes/index';

const pages = ['Home', 'Services', 'Reservation', 'Contact'];
const settings = ['Profile','Logout','Cart'];

export function Navbar() {

    const { mutateAsync: logout, isPending } = useLogoutMutation()

    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null);
        if (page === 'Reservation') {
            navigate('/resturants/reservation');
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem('user'));

    React.useEffect(() => {
        const checkLogin = () => setIsLoggedIn(!!localStorage.getItem('user'));
        checkLogin();
        const handleAuthChange = () => checkLogin();
        window.addEventListener('storage', checkLogin);
        window.addEventListener('authChange', handleAuthChange);
        return () => {
            window.removeEventListener('storage', checkLogin);
            window.removeEventListener('authChange', handleAuthChange);
        };
    }, []);

    return (
        <AppBar position="static" sx={{
            backgroundColor: 'navigation.main'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Mobile menu button */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => {
                                    handleCloseNavMenu();
                                    navigate('/' + page.toLowerCase().replace(/\s+/g, ''));
                                    if (page === 'Home') {
                                        navigate('/');
                                    }
                                     if (page === 'Services') {
                                        navigate('/resturants');
                                    }
                                         if (page === 'reservation') {
                                navigate('/resturants/reservation');
                                    }
                                }}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                            {!isLoggedIn && (
                                <MenuItem onClick={() => {
                                    handleCloseNavMenu();
                                    navigate('/login');
                                }}>
                                    <Typography sx={{ textAlign: 'center' }}>Login</Typography>
                                </MenuItem>
                            )}
                            {!isLoggedIn && (
                                <MenuItem onClick={() => {
                                    handleCloseNavMenu();
                                    navigate('/sign-up');
                                }}>
                                    <Typography sx={{ textAlign: 'center' }}>Sign Up</Typography>
                                </MenuItem>
                            )}
                            <div>

                            </div>
                        </Menu>
                    </Box>

                    {/* Left: Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 4, cursor: 'pointer' }} onClick={() => navigate('/') }>
                        <img src='/logo.svg' height='32' alt="termbi" />
                    </Box>

                    {/* Center: Navigation links (centered) */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', gap: 4 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => {
                                    handleCloseNavMenu();
                                    navigate('/' + page.toLowerCase().replace(/\s+/g, ''));
                                    if (page === 'Home') {
                                        navigate('/');
                                    }
                                     if (page === 'Services') {
                                        navigate('/resturants');
                                    }
                                           if (page === 'Reservation') {
                                navigate('/resturants/reservation');
                                    }
                                }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Right: language + auth */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <LangaugeDropDown />
                        {!isLoggedIn ? (
                            <Button
                                onClick={() => navigate('/login')}
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: 'rgba(255,255,255,0.8)',
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    '&:hover': { borderColor: 'rgba(255,255,255,1)' }
                                }}
                            >
                                Log in
                            </Button>
                        ) : null}
                             {!isLoggedIn ? (
                            <Button
                                onClick={() => navigate('/sign-up')}
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: 'rgba(255,255,255,0.8)',
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    '&:hover': { borderColor: 'rgba(255,255,255,1)' }
                                }}
                            >
                                Sign up
                            </Button>
                        ) : null}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {isLoggedIn ? (
                            <>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={
                                            async () => {
                                                handleCloseUserMenu();
                                                if (setting === 'Logout') {
                                                    try {
                                                        const response = await logout()
                                                        console.log("Logout response", response);

                                                        toast.success('Logout successfully');
                                                        setIsLoggedIn(false);
                                                        window.dispatchEvent(new Event('authChange'));
                                                        navigate(appRoutes.home);
                                                    } catch (e) {
                                                        console.log(e);
                                                        toast.error('Failed to logout');
                                                    }
                                                } else if (setting === 'Profile') {
                                                    navigate('/profile');
                                                } else {

                                                }
                                            }
                                        }>
                                            <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </>
                        ) : null}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

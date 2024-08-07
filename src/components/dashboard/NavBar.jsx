import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import Cookies from 'js-cookie';

function NavBar() {
  const user = useSelector((state) => state.auth.user); // Assuming user data is stored in auth slice

  const [pages, setPages] = useState([
    { title: 'Home', path: '/dashboard' },
    { title: 'Buy House', path: '/dashboard/sale' },
    { title: 'Rent House', path: '/dashboard/rent' },
    { title: 'Wishlist', path: '/dashboard/wishlist' },
    ...(user?.role !== 'user'
      ? [{ title: 'My Houses', path: '/dashboard/myhouses' }]
      : []),

    ...(user?.role === 'admin'
      ? [{ title: 'Admin', path: '/dashboard/admin' }]
      : []),
  ]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.houses.wishlist);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    Cookies.remove('token');
    dispatch(authActions.logout());
    navigate('/auth');
  };

  // useEffect(() => {
  //   if (user?.role !== 'user') {
  //     setPages((prevPages) => [
  //       ...prevPages,
  //       { title: 'My Houses', path: '/dashboard/myhouses' },
  //     ]);
  //   }
  //   if (user?.role === 'admin') {
  //     setPages((prevPages) => [
  //       ...prevPages,
  //       { title: 'Admin', path: '/dashboard/admin' },
  //     ]);
  //   }
  // }, [user]);

  return (
    <>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'primary.main',
          boxShadow: 'none',
          padding: '2px 0',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: { xs: '1.2em', md: '2em' },
                color: 'white',
                textDecoration: 'none',
                marginLeft: { xs: 1, md: 2 },
                display: { sm: 'flex' },
              }}
            >
              DwellingDeals
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
                  component={NavLink}
                  to={page.path}
                  end // This ensures exact path matching
                  style={({ isActive }) => ({
                    textTransform: 'capitalize',
                    margin: '0 10px',
                    fontSize: '1em',
                    fontWeight: '500',
                    backgroundColor: isActive ? '#9cc0cf9a' : 'transparent',
                    color: 'white',
                  })}
                >
                  {page.title === 'Wishlist' ? (
                    <Badge badgeContent={wishlist?.length} color='info'>
                      {page.title}
                    </Badge>
                  ) : (
                    page.title
                  )}
                </Button>
              ))}
            </Box>

            {/* Account Tab */}
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  display: {
                    xs: 'flex',
                  },
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'secondary.main',
                    padding: '0px',
                    paddingRight: { xs: '2px', md: '10px' },

                    borderRadius: '10px',
                  }}
                >
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{
                      padding: { xs: '2px', md: '10px' },
                      // margin: '0px',
                    }}
                  >
                    <Avatar
                      alt={user?.name}
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        padding: '0px',
                        margin: '0px',
                      }}
                    >
                      {user?.name[0].toUpperCase()}
                    </Avatar>
                  </IconButton>
                  <Box
                    sx={{
                      marginLeft: '0px',
                    }}
                  >
                    <Typography
                      margin={'0'}
                      sx={{
                        fontSize: { xs: '0.7em', md: '1em' },
                        color: 'black',
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        margin: '0px',
                      }}
                    >
                      {user?.name}
                    </Typography>
                    <Typography
                      margin={'0'}
                      sx={{
                        fontSize: { xs: '0.5em', md: '0.8em' },
                        color: 'primary.main',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        opacity: 0.8,
                      }}
                    >
                      {user?.role}
                    </Typography>
                  </Box>
                </Box>
                <Menu
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
                  <MenuItem
                    component={Link}
                    to='/dashboard/settings'
                    onClick={handleCloseUserMenu}
                  >
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                </Menu>
              </Box>

              {/* Mobile Menu */}
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-label='menu'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
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
                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign='center'
                        component={NavLink}
                        to={page.path}
                        end // This ensures exact path matching
                        style={({ isActive }) => ({
                          backgroundColor: isActive
                            ? 'rgba(0, 0, 0, 0.1)'
                            : 'transparent',
                        })}
                      >
                        {page.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;

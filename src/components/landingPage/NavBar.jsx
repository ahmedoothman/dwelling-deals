import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
const pages = [
  { title: 'Buy House', path: '/dashboard/sale' },
  { title: 'Rent House', path: '/dashboard/rent' },
  { title: 'Sell House', path: '/dashboard/myhouses' },
  { title: 'About Us', path: '/about-us' },
  { title: 'Contact Us', path: '/contact-us' },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'secondary.main',
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
                fontSize: { xs: '1.5em', md: '2em' },
                color: 'black',
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
                  component={Link}
                  to={`${page.path}`}
                  sx={{
                    color: 'black',
                    textTransform: 'capitalize',
                    margin: '0 10px',
                  }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            {/* Auth Buttons */}
            <Box sx={{ flexGrow: 0 }}>
              <Button
                component={Link}
                to='/auth'
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'inline',
                  marginRight: '20px',
                  textTransform: 'capitalize',
                }}
              >
                Sign In
              </Button>
              <Button
                variant='contained'
                component={Link}
                to='/auth/register'
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'inline',
                  background: '#201E43',
                  borderRadius: '5px',
                  padding: '10px 15px',
                  border: 'none',
                  marginRight: '40px',
                  textTransform: 'capitalize',
                }}
              >
                Register
              </Button>
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
                      component={Link}
                      to={`${page.path}`}
                    >
                      {page.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;

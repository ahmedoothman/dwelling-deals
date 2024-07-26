import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import '@fontsource/roboto';

const pages = ['Sell House', 'Rent House', 'WishList'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#9cc0cf", boxShadow: "none", padding: "2px 0", fontFamily: 'Roboto, sans-serif' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: { xs: '1.5em', md: '2em' },
                color: 'black',
                textDecoration: 'none',
                marginLeft: { xs: 1, md: 2 },
                display: { xs: 'none', md: 'flex' },
              }}
            >
              LOGO
            </Typography>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" component={Link} to={`/${page.replace(/ /g, '-').toLowerCase()}`}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.replace(/ /g, '-').toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', marginRight: "20px", textTransform: 'capitalize' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Auth Buttons */}
            <Box sx={{ flexGrow: 0 }}>
              <Button component={Link} to="/signin" sx={{ my: 2, color: 'black', display: 'inline', marginRight: "20px", textTransform: 'capitalize' }}>
                Sign In
              </Button>
              <Button variant="contained" component={Link} to="/register" sx={{ my: 2, color: 'white', display: 'inline', background: "#201E43", borderRadius: "5px", padding: "10px 15px", border: "none", marginRight: "40px", textTransform: 'capitalize' }}>
                Register
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ marginTop: "2px", background: "#9cc0cf", display: "flex", position: 'relative', overflow: 'hidden', flexDirection: { xs: 'column', md: 'row' } }}>
        <Box 
          sx={{
            backgroundImage: 'url(house-3.jpeg)',
            position: 'absolute',
            top: { xs: '42%', md: '40%',lg:"15%" },
            right: 0,
            width: { xs: '60%', md: '60%',lg:'50%' },
            height: { xs: '60%', md: '75%' ,lg:"90%" },
          
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 2, padding: '20px', maxWidth: { xs: '100%', md: '50%' }, margin: 'auto', marginLeft: { xs: 0, md: "10%" }, marginTop: "4%" }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: "black", 
          marginRight: {xs:"10%",md:"10%",lg:"30%"}, fontSize: { xs:'1.5em',md:'1.8em',lg:'2.5em' },
          //  width:{xs:"40%" ,md:"80%"},
           lineHeight: "1.3" }}>
            We help people to getting home & renting with good price
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "gray",
          fontSize: { xs:'1em', md:'0.7em', lg:'1.1em' } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit<br />
            Adipisci est ea omnis eos veritatis labore quam error<br />
            veritatis labore quam error,
          </Typography>

          <Button variant="contained" sx={{ margin: "auto", textTransform: "capitalize", color: "white", background: '#201E43' }}>
            Explore Now
          </Button>

          <Box display={"flex"} gap={{xs:3 , md:5}} sx={{ mt: 3, mb: 5, flexDirection: { xs: 'row', md: 'row' } }}>
            <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
              12K
              <Typography variant="h5" component={"span"} sx={{ color: "#201E43" }}>+</Typography>
              <Typography variant="body2" component="p" color={"gray"}>Happy<br />Customer</Typography>
            </Typography>

            <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
              14K
              <Typography variant="h5" component={"span"} sx={{ color: "#201E43" }}>+</Typography>
              <Typography variant="body2" component="p" color={"gray"}>Awards<br />Winning</Typography>
            </Typography>

            <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
              5K
              <Typography variant="h5" component={"span"} sx={{ color: "#201E43" }}>+</Typography>
              <Typography variant="body2" component="p" color={"gray"}>Premium<br />Product</Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ResponsiveAppBar;

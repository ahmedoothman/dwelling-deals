import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import '@fontsource/roboto';
import { useNavigate } from 'react-router-dom';

import NavBar from './NavBar';

function FirstSection() {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      {/* Hero Section */}
      <Box
        sx={{
          marginTop: '2px',
          backgroundColor: 'secondary.main',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/src/assets/images/house-3.jpeg)',
            position: 'absolute',
            top: { xs: '42%', md: '40%', lg: '15%' },
            right: 0,
            width: { xs: '60%', md: '60%', lg: '50%' },
            height: { xs: '60%', md: '75%', lg: '90%' },

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            padding: '20px',
            maxWidth: { xs: '100%', md: '50%' },
            margin: 'auto',
            marginLeft: { xs: 0, md: '10%' },
            marginTop: '4%',
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: 'black',
              marginRight: { xs: '10%', md: '10%', lg: '30%' },
              fontSize: { xs: '1.5em', md: '1.8em', lg: '2.5em' },
              //  width:{xs:"40%" ,md:"80%"},
              lineHeight: '1.3',
            }}
          >
            We help people to getting home & renting with good price
          </Typography>

          <Typography
            variant='body1'
            sx={{
              mb: 3,
              color: 'gray',
              fontSize: { xs: '1em', md: '0.7em', lg: '1.1em' },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            <br />
            Adipisci est ea omnis eos veritatis labore quam error
            <br />
            veritatis labore quam error,
          </Typography>

          <Button
            variant='contained'
            sx={{
              margin: 'auto',
              textTransform: 'capitalize',
              color: 'white',
              background: '#201E43',
            }}
            onClick={() => navigate('/dashboard')}
          >
            Explore Now
          </Button>

          <Box
            display={'flex'}
            gap={{ xs: 3, md: 5 }}
            sx={{ mt: 3, mb: 5, flexDirection: { xs: 'row', md: 'row' } }}
          >
            <Typography variant='h5' sx={{ color: 'white', mb: 1 }}>
              12K
              <Typography
                variant='h5'
                component={'span'}
                sx={{ color: '#201E43' }}
              >
                +
              </Typography>
              <Typography variant='body2' component='p' color={'gray'}>
                Happy
                <br />
                Customer
              </Typography>
            </Typography>

            <Typography variant='h5' sx={{ color: 'white', mb: 1 }}>
              14K
              <Typography
                variant='h5'
                component={'span'}
                sx={{ color: '#201E43' }}
              >
                +
              </Typography>
              <Typography variant='body2' component='p' color={'gray'}>
                Awards
                <br />
                Winning
              </Typography>
            </Typography>

            <Typography variant='h5' sx={{ color: 'white', mb: 1 }}>
              5K
              <Typography
                variant='h5'
                component={'span'}
                sx={{ color: '#201E43' }}
              >
                +
              </Typography>
              <Typography variant='body2' component='p' color={'gray'}>
                Premium
                <br />
                Product
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default FirstSection;

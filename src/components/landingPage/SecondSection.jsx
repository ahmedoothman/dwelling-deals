import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HomeIcon from '@mui/icons-material/Home';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function SecondSection() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          marginTop: { xs: '4%', md: '3%' },
        }}
      >
        <Typography variant='h4' sx={{ fontWeight: '500', color: '#201E43' }}>
          See how Trulia can help
        </Typography>
      </Box>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent='center'
        alignItems='center'
        margin={5}
        gap={5}
        sx={{
          flexWrap: { md: 'nowrap', lg: 'wrap' },
          // width: {md:"50%" , lg:"100%"} ,
          width: { xs: '100%', md: '100%', lg: '90%' },
          maxWidth: '1200px',
          marginLeft: { xs: '0%', lg: '10%' },
          marginTop: { xs: '2%', md: '4%' },
        }}
      >
        {/* First Card */}
        <Card sx={{ maxWidth: 345, border: 'none', boxShadow: 'none' }}>
          <CardActionArea>
            <Box sx={{ textAlign: 'center', marginTop: '3%' }}>
              <CottageOutlinedIcon sx={{ fontSize: 50, color: '#40A578' }} />
            </Box>
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                sx={{ textAlign: 'center' }}
              >
                Rent a home
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                textAlign={'center'}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                minima modi quidem quisquam voluptatem nobis accusantium odio
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant='outlined'
              sx={{
                margin: 'auto',
                textTransform: 'capitalize',
                color: '#201E43',
                borderColor: '#201E43',
              }}
              onClick={() => navigate('/dashboard/rent')}
            >
              Find a rental
            </Button>
          </CardActions>
        </Card>

        {/* Second Card */}
        <Card sx={{ maxWidth: 345, border: 'none', boxShadow: 'none' }}>
          <CardActionArea>
            <Box sx={{ textAlign: 'center', marginTop: '1%' }}>
              <HomeIcon sx={{ fontSize: 50 }} />
            </Box>
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                sx={{ textAlign: 'center' }}
              >
                See neighborhoods
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                textAlign={'center'}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                minima modi quidem quisquam voluptatem nobis accusantium odio
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
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
              Learn more
            </Button>
          </CardActions>
        </Card>

        {/* Third Card */}
        <Card sx={{ maxWidth: 345, border: 'none', boxShadow: 'none' }}>
          <CardActionArea>
            <Box sx={{ textAlign: 'center', marginTop: '1%' }}>
              <HomeOutlinedIcon sx={{ fontSize: 50, color: '#3FA2F6' }} />
            </Box>
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                sx={{ textAlign: 'center' }}
              >
                Buy a home
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                textAlign={'center'}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                minima modi quidem quisquam voluptatem nobis accusantium odio
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant='outlined'
              sx={{
                margin: 'auto',
                textTransform: 'capitalize',
                color: '#201E43',
                borderColor: '#201E43',
              }}
              onClick={() => navigate('/dashboard/buy')}
            >
              Find a home
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default SecondSection;

import { Grid, Typography, Box, Paper } from '@mui/material';
import NavBar from '../components/landingPage/NavBar';
import Footer from '../components/landingPage/Footer';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function ContactUs() {
  return (
    <>
      <NavBar />

      <Paper
        elevation={3}
        sx={{
          margin: 'auto',
          marginTop: '30px',
          padding: '0',
          width: '80%',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Box display={'flex'} justifyContent={'space-around'}>
          <Grid container>
            <Grid item xs={12} md={6}>
              {/*First Box*/}
              <Box ml={3} padding={'10px 0'}>
                {/*Paragraph Box*/}
                <Box
                  flexDirection={'column'}
                  justifyContent={'space-around'}
                  padding={2}
                >
                  <Typography variant='h3' gutterBottom>
                    Contact Us
                  </Typography>
                  <Typography variant='body1' paragraph>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    veniam alias nisi quaerat, tempore repellat officia
                    provident dolorum magni quia doloremque quae delectus
                    accusantium dolores reiciendis? Nostrum beatae modi option
                  </Typography>
                </Box>

                <Box mt={5} padding={2}>
                  <Box
                    display='flex'
                    gap={1}
                    alignItems='center'
                    marginBottom={1}
                  >
                    <Typography>
                      <FacebookOutlinedIcon />
                    </Typography>
                    <Typography variant='body1'>www.facebook.com</Typography>
                  </Box>

                  <Box
                    display='flex'
                    gap={1}
                    alignItems='center'
                    marginBottom={1}
                  >
                    <Typography>
                      <EmailOutlinedIcon />
                    </Typography>
                    <Typography variant='body1'>Jourdan@gmail.com</Typography>
                  </Box>

                  <Box display='flex' gap={1} alignItems='center'>
                    <Typography>
                      {' '}
                      <LocalPhoneOutlinedIcon />
                    </Typography>
                    <Typography variant='body1'>1(234) 567-891</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/*Second box*/}
            <Grid item xd={12} md={6}>
              <Box
                component={'img'}
                src='/assets/images/HouseUs.jpg'
                alt='House'
                style={{ width: '100%', height: '100%' }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Footer />
    </>
  );
}

export default ContactUs;

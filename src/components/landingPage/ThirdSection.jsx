import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function ThirdSection() {
    return (
        <Box 
            display="flex" 
            flexDirection={{ xs: 'column', md: 'row' }} 
            justifyContent="center" 
            alignItems="center"
            gap={10}
            sx={{ 
                width: { xs: '90%', md: '90%' ,lg:"60%" }, 
                margin: { xs: 'auto', md: '5%' },
                marginTop: { xs: '2%', md: '5%' },
                marginLeft: { lg: '13%' },
            }}
        >

            <Box sx={{ width: { xs: '75%', md: '50%' } }}> 
                <img 
                    src="https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Meeting" 
                    style={{ width: '100%', height: 'auto' }}
                />
            </Box>


            <Box sx={{ width: { xs: '100%', md: '50%' }, textAlign: { xs: 'center', md: 'left' } }}>

                <Typography 
                    variant="h4" 
                    color="#201E43" 
                    sx={{ 
                        marginTop: { xs: '2%', md: '5%' }, 
                        fontWeight: "700", 
                        fontSize: { xs: '1.5rem', md: '1.8rem' } 
                    }}
                >
                    Seamlessly connecting agents <br/>buyers, and sellers
                </Typography>

                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                        marginTop: { xs: '2%', md: '3%' } 
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus aperiam praesentium blanditiis. Ab, suscipit laudantium at, quam odio rem, magnam eius ad dolorum accusamus amet quis corporis iusto earum.
                </Typography>
                

                <Button 
                    variant="contained" 
                    sx={{ 
                        marginTop: { xs: '3%', md: '5%' }, 
                        textTransform: "capitalize", 
                        color: "white", 
                        background: '#201E43',
                        padding: { xs: '8px 12px', md: '10px 15px' } 
                    }}
                >
                    Explore more
                </Button>
            </Box>
        </Box>
    );
}

export default ThirdSection;

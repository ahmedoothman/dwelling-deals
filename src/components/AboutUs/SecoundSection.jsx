import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const SecoundSection = () => {
    return (
        <>
            <Box>
                <Stack flexDirection={'row'} m={4} justifyContent={"space-between"}>
                    <Box p={3} width={'50%'}>
                    <Typography variant='h5' color={'black'} mb={3}>
                       <b>About Company</b> 
                    </Typography>
                    <Typography variant='p' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Vero, odio tempore quaerat deserunt,uisquam 
                         veniam aspernatur, quidem qui iure harum rem. 
                        Soluta aut .
                    </Typography>
                    </Box>
                    
                    <Box sx={{backgroundImage:`url("src/assets/images/secabout.jpg")`,backgroundSize:"cover"}} borderRadius={"15px"} width={'40%'} height={'350px'}>
                    </Box>
                    
                   
                </Stack>
            </Box>
        </>
    );
}

export default SecoundSection;

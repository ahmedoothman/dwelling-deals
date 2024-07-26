import { Margin } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';


const liststyle={listStyleType:"none",
    fontSize:8,
    color:`${grey[700]}`,
    padding:"10px",
    Margin:"5px",
    lineHeight:"2.5"
};
const Footer = () => {
    
    return (
        <Box  sx={{mt:5}}>
           <Stack >
            <Stack direction={'row'} justifyContent={"space-between"}>
                <Typography variant='p'p={{md:4,xs:0,sm:2}} fontSize={{ lg:20,md:12,xs:10}}><b>LOGO</b> <br />
                <Typography variant='p' color={grey[700]} fontSize={{lg:12,md:10,xs:9}}>
                    Lorem ipsum dolor 
                    sit amet consectetur 
                 </Typography>
                </Typography>
                <Stack direction={'row'} >
                <Typography variant='p' p={{md:4,xs:0,sm:2}} fontSize={{ lg:18,md:12,xs:9}}><b>Company</b>
                  <ul style={liststyle}>
                        <li>Dwelling Deals</li><li>Team</li><li>House rent</li><li>sales</li>
                    </ul>
                </Typography>
                <Typography variant='p' p={{md:4,xs:0,sm:2}} fontSize={{ lg:18,md:12,xs:9}}><b>Navigate</b>
                     <ul style={liststyle}>
                        <li>Roadmap</li><li>House</li><li>Explore</li><li>Email</li>
                    </ul>
                </Typography>
                <Typography variant='p' p={{md:4,xs:0,sm:2}} fontSize={{ lg:18,md:12,xs:9}}><b>Products</b>
                   <ul style={liststyle}>
                        <li>Rent</li><li>Sale</li><li>Buy</li><li>home</li>
                    </ul>
                </Typography>
                <Typography variant='p' p={{md:4,xs:0,sm:2}} fontSize={{ lg:18,md:12,xs:9}}><b>Contact us</b>
                   <ul style={liststyle}>
                        <li>Phone</li><li>Email</li><li>0145124589</li><li>DwellingDeals@gmail.com</li>
                    </ul>
                
                </Typography>
                 </Stack>
            </Stack>     
            <Stack direction={'row'} justifyContent={"space-between"} fontSize={{ lg:10,md:9,xs:6}}>
                <Typography variant='p' color={grey[700]} p={{md:4,xs:0,sm:2}}>
                    Copyright &copy; 2024 Dwelling deals
                 </Typography>
                <Stack direction={'row'} justifyContent={"space-between"}>
                <Typography variant='p' color={grey[700]} p={{md:4,xs:0,sm:2}}>
                    Terms & Agreements
                 </Typography>
                 <Typography variant='p'  color={grey[700]} p={{md:4,xs:0,sm:2}}>
                    Privecy Policy
                 </Typography>
                
                 
               </Stack>
            </Stack>  
              
        </Stack>

        </Box>
    );
}

export default Footer;

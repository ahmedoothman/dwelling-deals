import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, TextField } from '@mui/material';

const herocolor = "#9cc0cf";

const EnterEmail = () => {
    return (
        <Box sx={{
            textAlign: "center",
            backgroundColor: herocolor,
            width: "80%",
            maxWidth: "800px",
            margin: "auto",
            padding: "20px",
            borderRadius: "15px",
            boxSizing: "border-box"
        }}>
            <Typography variant='h5' textAlign={"center"} p={2}><b>Upgrade your home today?</b></Typography>
            <Typography color={'GrayText'} fontSize={14} textAlign={"center"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
                Iusto aliquid nesciuntaut eveniet
            </Typography>

            <Box sx={{
                backgroundColor: "white",
                width: { xs: "100%", sm: "80%", md: "60%" },
                borderRadius: "8px",
                padding: "10px",
                display: 'flex',
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                margin: "auto",
                mt: 2,
                gap: 1,
            }}>
                <TextField
                    fullWidth
                    id="standard-basic"
                    label="Enter your email..."
                    size='small'
                    variant="outlined"
                    sx={{ flex: 1, backgroundColor: "white" }}
                />
                <Button
                    variant="contained"
                    size='medium'
                    sx={{ textTransform: "none", backgroundColor: "#070324", mt: { xs: 1, sm: 0 } }}
                >
                    Continue
                </Button>
            </Box>
        </Box>
    );
}

export default EnterEmail;

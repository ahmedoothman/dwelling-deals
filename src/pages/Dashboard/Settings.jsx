import React from 'react';
import InfoSettings from '../../components/dashboard/InfoSettings';
import PasswordSettings from '../../components/dashboard/PasswordSettings';
import { Box, Divider } from '@mui/material';
function Settings() {
  return (
    <Box>
      <InfoSettings></InfoSettings>
      <Divider
        sx={{
          color: 'primary.main',
          width: '50%',
          margin: '30px auto',
        }}
      ></Divider>
      <PasswordSettings></PasswordSettings>
    </Box>
  );
}

export default Settings;

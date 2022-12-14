import React from 'react';
import ResponsiveAppBar from '../../components/Navbar/index';
import { Box, Typography } from '@mui/material'
export default () => (
  <div>
    <Box sx={{
      background: "#dddddd",
      maxWidth: "100%",
      padding: { lg: "0px 35px",xl:"0px 76.5px" ,md: "0px",sm:"0px",xs:"0px" },
      height: "100%",
    }}>
      <Box sx={{
        width: "100%",
        background: "#ffffff"
      }}>
        <Typography sx={{ background: "#fdbe33", paddingTop: "1%"  }}>
          <Box sx={{marginBottom:"1%"}}>
          </Box>
          <ResponsiveAppBar />
        </Typography>
      </Box>
    </Box>
  </div>
);
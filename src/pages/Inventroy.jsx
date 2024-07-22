import React from "react";
import Sidebar from "../components/Sidebar";
import Box from '@mui/material/Box';

export default function Inventroy() {
  return (
    <div>
    <Box height={80} />
    <Box sx={{ display:'flex'}}>
    <Sidebar/>
    <div>
    <h1>This is invontory page</h1>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>  
     hi this is inventory
      </Box>
    </div>
    </Box>       
    </div>
  )
}

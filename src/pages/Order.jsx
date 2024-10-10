import Sidebar from "../components/Sidebar";
import Box from '@mui/material/Box';
import React from "react";
import { useNavigate } from "react-router-dom";

export default function  Order() {
 const navigate = useNavigate()
  const openMap = ()=>{
    navigate("/map")
  }
  return (
    <div>
    <Box height={80} />
    <Box sx={{ display: 'flex' }}>
    <Sidebar/>
    <div>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>  
    <h1>This is Order page</h1>

       <div className="bnt">
        <button onClick={openMap}>Map</button>
       </div>
      </Box>
    </div>
    </Box>
        
    </div>
  )
}

import  Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EditNoteIcon from '@mui/icons-material/EditNote';
import BarChart from "../components/Chart/BarChart";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Navbar from "../components/Navbar";
import React from "react";
export default function Dashboard() {
  return (
    <>
         <Navbar/>
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 145 }} >
                  <CardContent>
                  <CreditCardIcon/>
                  <Typography gutterBottom variant="h5" component="div" >
                     $500.00
                    </Typography>   
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                     Total Earning
                    </Typography>   
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 145 }}>
                  <CardContent>
                  <LocalMallIcon/>
                    <Typography gutterBottom variant="h5" component="div">
                     $900.00
                    </Typography>   
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                     Total Order
                    </Typography>     
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{ minWidth: 49 + "%", height: 145 }} >
                  <CardContent>
                  <EditNoteIcon/>
                  <Typography gutterBottom variant="h5" component="div" >
                     $500.00
                    </Typography>   
                    <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
                     Total Complaints
                    </Typography>   
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
          {/* Second Grid container */}
          <Box height={30} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card sx={{ height: 45 + "vh" }}>
                <BarChart/>
              </Card>
            </Grid>
            <Grid item xs={6}>
            <Stack spacing={2} direction="row" >
             <Card sx={{ minWidth: 49 + "%", height: 145 }}>
             <div style={{ width: 100, height: 100 , margin:20}}>
                  <CircularProgressbar value={66}  text={"70%"}  />
                   </div>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 145 }}>
                <div style={{ width: 100, height: 100, margin:20}}>
                  <CircularProgressbar value={50}  text={"50%"} />
                   </div>
                </Card>
             </Stack>
          <Box height={44} />
          <Stack spacing={2} direction="row" >
             <Card sx={{ minWidth: 49 + "%", height: 145 }}>
             <div style={{ width: 100, height: 100, margin:20 }}>
                  <CircularProgressbar value={80}  text={"80%"} />
                   </div>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 145 }}>
                <div style={{ width: 100, height: 100, margin:20 }}>
                  <CircularProgressbar value={100}  text={"100%"} />
                   </div>
                </Card>
             </Stack>         
            </Grid>       
          </Grid>    
        </Box>
      </Box>
    </>
  );
}

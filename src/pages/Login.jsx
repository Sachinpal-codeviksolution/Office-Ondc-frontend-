import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import React from "react";

export default function Login() {
  const [email_id, setEmail_id] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function postData(e) {
    e.preventDefault();
    let response = await fetch("https://stage.ramonize.com/dashboard/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email_id: email_id, password: password }),
    });
    response = await response.json();
    if (response.success === true) {
      const token = response.token;
      Cookies.set('token', token, { expires: 7, secure: true });
      navigate("/dashboard");
    } else {
        <Alert variant="filled" severity="warning">
       This is a filled warning Alert.
      </Alert>
      alert("Invalid Username or Password!!!");
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'primary.main',
        padding: '20px',
      }}
    >
      <Box
        component="form"
        onSubmit={postData}
        sx={{
          width: '100%',
          maxWidth: '400px',
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          p: 3,
        }}
      >
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email_id}
          onChange={(e) => setEmail_id(e.target.value)}
          fullWidth
          margin="normal"
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

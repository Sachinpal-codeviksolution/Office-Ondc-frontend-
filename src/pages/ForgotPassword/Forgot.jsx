import React, { useState } from "react";
import { Link,Link as RouterLink, useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";
import Alertt from "../../components/Alert/Alertt";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let response = await fetch(`http://localhost:8080/dashboard/forgot-Password`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      response = await response.json();

      if (response.success === true) {
        toast.success(response.message);
        navigate("/login"); // Redirect to login page after email is sent
      } else {
        toast.error(response.message);
        setError(response.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "primary.main",
        padding: "20px",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: "400px",
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          p: 3,
        }}
      >
        {error && (
          <Alertt variant="filled" severity="error" position="top">
            {error}
          </Alertt>
        )}

        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="warning" /> : "Send Reset Link"}
        </Button>

        <Grid container sx={{ mt: 2 }} justifyContent="flex-end">
          <Grid item sx={{fontFamily:"Lato"}}>
            <Link
              component={RouterLink}
              to="/"
              variant="body2"
              style={{ color: "blue", textDecoration: "none" }}
            >
              {"Back to Login"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
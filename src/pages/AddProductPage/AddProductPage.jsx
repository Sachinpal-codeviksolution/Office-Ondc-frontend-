import React from "react";
import {
  Button,
  Box,
  Grid,
  Stack,
  ThemeProvider,
  createTheme,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Switch from '@mui/material/Switch';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function AddProductPage() {
  const [productCategory, setProductCategory] = React.useState("");
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setProductCategory(event.target.value);
  };

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="m-5">
      <ThemeProvider theme={theme}>
        <Box height="80px" />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography color="blue" sx={{ padding: 2, fontWeight: "bold" }}>
              Inventory
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={5} direction="row">
              <Button variant="contained" color="primary">
                + BULK UPLOAD
              </Button>
              <Button variant="contained" color="primary">
                + ADD PRODUCT
              </Button>
              <Button variant="contained" color="primary">
                + ADD CUSTOMIZATION
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Typography color="blue" sx={{ padding: 2, fontWeight: "bold" }}>
              Filter
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                "& .MuiFormControl-root": { m: 1, minWidth: 250 },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="standard-search"
                  label="Search By Product Name"
                  type="search"
                  variant="standard"
                  sx={{ m: 1, width: "25ch" }}
                />

                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-standard-label">
                    Please Select Product Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="select_product"
                    value={productCategory}
                    onChange={handleChange}
                    label="Please Select Product Category"
                    sx={{ m: 1, minWidth: 250 }}
                  >
                    <MenuItem value="">
                     
                    </MenuItem>
                    <MenuItem value="Product">Product </MenuItem>
                    <MenuItem value="Customization">Customization</MenuItem>
                  </Select>
                </FormControl>
 
                <Switch
                  checked={checked}
                  onChange={handleChangeChecked}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default AddProductPage;

import React, { useState } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  TablePagination,
  Switch,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

const initialData = [
  {
    id: 1,
    name: "jksndf",
    type: "customization",
    quantity: 3,
    price: 454,
    cancellable: "-",
    returnable: "-",
    customization: "-",
    published: "Yes",
  },
  {
    id: 2,
    name: "daal",
    type: "item",
    quantity: 2,
    price: 58,
    cancellable: "No",
    returnable: "No",
    customization: "-",
    published: "Yes",
  },

];

function Inventory() {
  const [productCategory, setProductCategory] = useState("");
  const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);
  const navigate = useNavigate();
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter data based on search and category
  const handleFilter = () => {
    let data = initialData;

    if (searchQuery) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (productCategory) {
      data = data.filter((item) => item.type === productCategory);
    }
    if (checked) {
      // Add any specific out-of-stock filter logic if needed
      // For example, assuming out of stock items have quantity 0
      data = data.filter((item) => item.quantity === 0);
    }

    setFilteredData(data);
    setPage(0); // Reset to the first page after filtering
  };

  // Reset filters
  const handleReset = () => {
    setSearchQuery("");
    setProductCategory("");
    setChecked(false);
    setFilteredData(initialData);
    setPage(0); // Reset to the first page after reset
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Paginate the filtered data
  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="">
      <ThemeProvider theme={theme}>
        {/* Header */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Inventory
            </Typography>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box height="30px" />

        {/* Filter Section */}
        <Grid container spacing={2} alignItems="center" sx={{ px: 2 }}>
          <Grid item xs={12}>
            <Typography color="primary" sx={{ fontWeight: "bold" }}>
              Filters
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="standard-search"
              label="Search by Product Name"
              type="search"
              variant="standard"
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Please Select Product Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="select_product"
                value={productCategory}
                onChange={handleCategoryChange}
                label="Please Select Product Category"
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="Product">Product</MenuItem>
                <MenuItem value="Customization">Customization</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Out of Stock</Typography>
              <Switch
                checked={checked}
                onChange={handleChangeChecked}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" color="primary" onClick={handleReset}>
                RESET
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleFilter}
              >
                FILTER
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Box height="20px" />

        {/* Action Buttons */}
        <Grid container spacing={2} justifyContent="flex-end" sx={{ px: 2 }}>
          <Grid item>
            <Button variant="contained" color="primary">
              + BULK UPLOAD
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/addProductpage")}
            >
              + ADD PRODUCT
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              + ADD CUSTOMIZATION
            </Button>
          </Grid>
        </Grid>

        <Box height="20px" />

        {/* Table Section */}
        <Grid container spacing={2} sx={{ px: 2 }}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow style={{ backgroundColor: "#1976d2" }}>
                    <TableCell style={{ color: "white" }}>
                      Product Name
                    </TableCell>
                    <TableCell style={{ color: "white" }}>Type</TableCell>
                    <TableCell style={{ color: "white" }}>Quantity</TableCell>
                    <TableCell style={{ color: "white" }}>
                      Purchase Price
                    </TableCell>
                    <TableCell style={{ color: "white" }}>
                      Cancellable
                    </TableCell>
                    <TableCell style={{ color: "white" }}>Returnable</TableCell>
                    <TableCell style={{ color: "white" }}>
                      Customization
                    </TableCell>
                    <TableCell style={{ color: "white" }}>Published</TableCell>
                    <TableCell style={{ color: "white" }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell>{row.cancellable}</TableCell>
                      <TableCell>{row.returnable}</TableCell>
                      <TableCell>{row.customization}</TableCell>
                      <TableCell>{row.published}</TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="more"
                          aria-controls="long-menu"
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Edit</MenuItem>
                          <MenuItem onClick={handleClose}>Delete</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Inventory;

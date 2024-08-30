import { useState } from "react";
import React from 'react';

import {
  Container,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
  Button,
  FormGroup,
  Checkbox,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";

export default function Store() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [locationAvailability, setLocationAvailability] = useState("");
  const [cancel, setCancel] = useState("");
  const [returnable, setReturnable] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [building, setBuilding] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [locality, setLocality] = useState("");
  const [logo, setLogo] = useState("");
  const [networkLogistics, setNetworkLogistics] = useState("");
  const [logisticsBppId, setLogisticsBppId] = useState("");
  const [logisticsDeliveryType, setLogisticsDeliveryType] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [deliveryChecked, setDeliveryChecked] = useState(false);
  const [selfPickupChecked, setSelfPickupChecked] = useState(false);
  const [deliveryEmail, setDeliveryEmail] = useState("");
  const [deliveryContactNumber, setDeliveryContactNumber] = useState("");
  const [selfPickupEmail, setSelfPickupEmail] = useState("");
  const [selfPickupContactNumber, setSelfPickupContactNumber] = useState("");
  const [cites, setCites] = useState('');
  const [serviceableRadius, setServiceableRadius] = useState('');

  const handleNetworkLogistics = (event) => {
    setNetworkLogistics(event.target.value);
  };

  const handleCancelChange = (event) => {
    setCancel(event.target.value);
  };

  const handleReturnChange = (event) => {
    setReturnable(event.target.value);
  };

  const handleDeliveryChange = (event) => {
    setDeliveryChecked(event.target.checked);
  };

  const handleSelfPickupChange = (event) => {
    setSelfPickupChecked(event.target.checked);
  };

  const handleLocationChange = (e) => {
    setLocationAvailability(e.target.value);
  };

  return (
    <Container sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: 4 }}>
        Store Details
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Product</InputLabel>
              <Select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                sx={{ mb: 2 }}
              >
                <MenuItem value="">Select a product</MenuItem>
                <MenuItem value="Grocery">Grocery</MenuItem>
                <MenuItem value="Fashion">Fashion</MenuItem>
                <MenuItem value="Food">Food</MenuItem>
                <MenuItem value="Logistic">Logistic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Location Availability</FormLabel>
              <RadioGroup
                row
                aria-label="location-availability"
                name="location-availability"
                value={locationAvailability}
                onChange={handleLocationChange}
              >
                <FormControlLabel value="PAN india" control={<Radio />} label="PAN India" />
                <FormControlLabel value="City" control={<Radio />} label="City" />
                <FormControlLabel value="Radius" control={<Radio />} label="Radius" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {locationAvailability === 'City' && (
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select Cities</InputLabel>
                <Select
                  value={cites}
                  onChange={(e) => setCites(e.target.value)}
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="">Select a City</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                  <MenuItem value="Pune">Pune</MenuItem>
                  <MenuItem value="Noida">Noida</MenuItem>
                  <MenuItem value="Kolkata">Kolkata</MenuItem>
                  <MenuItem value="Bengaluru">Bengaluru</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          )}
          {locationAvailability === 'Radius' && (
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Serviceable Radius/Circle (in Kilometer)"
                name="serviceableRadius"
                value={serviceableRadius}
                onChange={(e) => setServiceableRadius(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Default Cancellable Setting</FormLabel>
              <RadioGroup
                row
                aria-label="cancel"
                name="cancel"
                value={cancel}
                onChange={handleCancelChange}
              >
                <FormControlLabel
                  value="Cancellable"
                  control={<Radio />}
                  label="Cancellable"
                />
                <FormControlLabel
                  value="Non-Cancellable"
                  control={<Radio />}
                  label="Non-Cancellable"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Default Returnable Setting</FormLabel>
              <RadioGroup
                row
                aria-label="returnable"
                name="returnable"
                value={returnable}
                onChange={handleReturnChange}
              >
                <FormControlLabel
                  value="Returnable"
                  control={<Radio />}
                  label="Returnable"
                />
                <FormControlLabel
                  value="Non-Returnable"
                  control={<Radio />}
                  label="Non-Returnable"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="State"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="City"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Building"
              name="building"
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Pin Code"
              name="pinCode"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Locality"
              name="locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              required
              label="Logo URL"
              name="logo"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
          </Grid>
          <Typography variant="h4" gutterBottom align="center" sx={{ marginY: 4 }}>
            Logistics Details
          </Typography>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Network Logistics</FormLabel>
              <RadioGroup
                row
                aria-label="networkLogistics"
                name="networkLogistics"
                value={networkLogistics}
                onChange={handleNetworkLogistics}
              >
                <FormControlLabel value="on" control={<Radio />} label="On" />
                <FormControlLabel value="off" control={<Radio />} label="Off" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Logistics Delivery Type</InputLabel>
              <Select
                value={logisticsDeliveryType}
                onChange={(e) => setLogisticsDeliveryType(e.target.value)}
                sx={{ mb: 2 }}
              >
                <MenuItem value="">Select a delivery type</MenuItem>
                <MenuItem value="Express">Express</MenuItem>
                <MenuItem value="Standard">Standard</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {networkLogistics === "on" ? (
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Logistics Bpp Id"
                name="logisticsBppId"
                value={logisticsBppId}
                onChange={(e) => setLogisticsBppId(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Grid>
          ) : (
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Delivery Time"
                name="deliveryTime"
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Grid>
          )}
          <Typography variant="h4" gutterBottom align="center" sx={{ marginY: 4 }}>
            Supported Fulfillments
          </Typography>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={deliveryChecked} onChange={handleDeliveryChange} />}
                label="Delivery"
                value="delivery"
              />
              <FormControlLabel
                control={<Checkbox checked={selfPickupChecked} onChange={handleSelfPickupChange} />}
                label="Self Pickup"
                value="selfPickup"
              />
            </FormGroup>
            {deliveryChecked && (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Delivery Email"
                    name="deliveryEmail"
                    value={deliveryEmail}
                    onChange={(e) => setDeliveryEmail(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Delivery Contact Number"
                    name="deliveryContactNumber"
                    value={deliveryContactNumber}
                    onChange={(e) => setDeliveryContactNumber(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </>
            )}
            {selfPickupChecked && (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Self Pickup Email"
                    name="selfPickupEmail"
                    value={selfPickupEmail}
                    onChange={(e) => setSelfPickupEmail(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Self Pickup Contact Number"
                    name="selfPickupContactNumber"
                    value={selfPickupContactNumber}
                    onChange={(e) => setSelfPickupContactNumber(e.target.value)}
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Update
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

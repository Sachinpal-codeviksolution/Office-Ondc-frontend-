import React, { useState } from "react";
import {
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const daysOfWeek = [
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
  { value: 'Sunday', label: 'Sunday' },
];

export default function StoreTiming() {
  const [storeStatus, setStoreStatus] = useState("");
  const [dates, setDates] = useState([]);
  const [timings, setTimings] = useState([
    { dayFrom: 'Monday', dayTo: 'Friday', timeFrom: '10:00', timeTo: '12:00' },
  ]);

  const addMoreTimings = () => {
    setTimings([
      ...timings,
      { dayFrom: 'Monday', dayTo: 'Friday', timeFrom: '10:00', timeTo: '12:00' },
    ]);
  };

  const handleDayFromChange = (index, value) => {
    const newTimings = [...timings];
    newTimings[index].dayFrom = value;
    setTimings(newTimings);
  };

  const handleDayToChange = (index, value) => {
    const newTimings = [...timings];
    newTimings[index].dayTo = value;
    setTimings(newTimings);
  };

  const handleTimeFromChange = (index, value) => {
    const newTimings = [...timings];
    newTimings[index].timeFrom = value;
    setTimings(newTimings);
  };

  const handleTimeToChange = (index, value) => {
    const newTimings = [...timings];
    newTimings[index].timeTo = value;
    setTimings(newTimings);
  };

  const handleStoreStatus = (event) => {
    setStoreStatus(event.target.value);
    setDates([]);
  };

  const format = "MM/DD/YYYY";

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Store Status</FormLabel>
            <RadioGroup
              row
              aria-label="Store Status"
              name="storeStatus"
              value={storeStatus}
              onChange={handleStoreStatus}
            >
              <FormControlLabel
                value="enabled"
                control={<Radio />}
                label="Enabled"
              />
              <FormControlLabel
                value="temporarilyClosed"
                control={<Radio />}
                label="Temporarily Closed"
              />
              <FormControlLabel
                value="disabled"
                control={<Radio />}
                label="Disabled"
              />
            </RadioGroup>
          </FormControl>
        </Grid>     

        {storeStatus === "enabled" && (
          <Grid item xs={12}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Holidays</FormLabel>
              <Box sx={{ marginTop: 2 }}>
                <DatePicker
                  label="Holidays"
                  value={dates}
                  onChange={setDates}
                  multiple
                  sort
                  format={format}
                  calendarPosition="bottom-center"
                  plugins={[<DatePanel key="date-panel" />]}
                  style={{ width: '100%' }}
                />
              </Box>
            </FormControl>
          </Grid>
        )}

        {storeStatus === "temporarilyClosed" && (
          <Grid item xs={12}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>Timings</FormLabel>
              <Box sx={{ marginTop: 2 }}>
                {timings.map((timing, index) => (
                  <Box key={index} sx={{ marginBottom: 3, padding: 2, border: '1px solid #ddd', borderRadius: 1, backgroundColor: '#f9f9f9' }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          select
                          label="Days From"
                          value={timing.dayFrom}
                          onChange={(e) => handleDayFromChange(index, e.target.value)}
                          helperText="Please select the starting day"
                          fullWidth
                          size="small"
                        >
                          {daysOfWeek.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          select
                          label="Days To"
                          value={timing.dayTo}
                          onChange={(e) => handleDayToChange(index, e.target.value)}
                          helperText="Please select the ending day"
                          fullWidth
                          size="small"
                        >
                          {daysOfWeek.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          label="Time From"
                          type="time"
                          value={timing.timeFrom}
                          onChange={(e) => handleTimeFromChange(index, e.target.value)}
                          InputLabelProps={{ shrink: true }}
                          inputProps={{ step: 300 }} // 5 min intervals
                          fullWidth
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          label="Time To"
                          type="time"
                          value={timing.timeTo}
                          onChange={(e) => handleTimeToChange(index, e.target.value)}
                          InputLabelProps={{ shrink: true }}
                          inputProps={{ step: 300 }} // 5 min intervals
                          fullWidth
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                ))}

                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ marginTop: 2 }}
                  onClick={addMoreTimings}
                >
                  Add More Days & Timings
                </Button>
              </Box>
            </FormControl>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

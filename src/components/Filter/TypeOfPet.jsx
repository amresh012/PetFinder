// import React from 'react'

import {
  Stack,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";

function TyOfPet() {
  return (
    <Stack spacing={1}>
      <InputLabel>Type of Pets</InputLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{display:"flex" , alignItems:"center" , justifyContent:"space-around"}}
      >
        <FormControlLabel
          value="All"
          control={<Radio />}
          label={
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 13, fontWeight: 500 }}
            >
              All
            </Typography>
          }
        />
        <FormControlLabel
          value="Cats"
          control={<Radio />}
          label={
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 13, fontWeight: 500 }}
            >
              Cats
            </Typography>
          }
        />
        <FormControlLabel
          value="Dogs"
          control={<Radio />}
          label={
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 13, fontWeight: 500 }}
            >
              Dogs
            </Typography>
          }
        />
      </RadioGroup>
    </Stack>
  );
}

export default TyOfPet;

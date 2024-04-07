import { useState } from "react";

import { InputLabel, Slider, Stack, TextField } from "@mui/material";

function PriceRange() {
  const [value, setValue] = useState([0, 15]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={1}>
      <InputLabel
        sx={{
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Age Range
      </InputLabel>
      <Slider valueLabelDisplay="auto" value={value} onChange={handleChange} />
      <Stack direction="row" spacing={1}>
        <TextField
          size="small"
          label="Minimum"
          type="number"
          value={value[0]}
          onChange={(e) => {
            setValue((prev) => {
              return [e.target.value, prev[1]];
            });
          }}
        />
        <TextField
          size="small"
          label="Maximum"
          type="number"
          value={value[1]}
          onChange={(e) => {
            setValue((prev) => {
              return [prev[0], e.target.value];
            });
          }}
        />
      </Stack>
    </Stack>
  );
}

export default PriceRange;

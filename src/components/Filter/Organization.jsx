import { useState } from "react";

import {
  Stack,
  InputLabel,
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

function RoomBed() {
  const [bedroom, setBedRoom] = useState("any");
  const handleChangeBedroom = (event, newValue) => {
    setBedRoom(newValue);
  };
  return (
    <Stack spacing={1}>
      <InputLabel
        sx={{
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Choose from
      </InputLabel>
      <Box sx={{ p: 1 }}>
        <Stack spacing={1}>
          <Typography>Organizations</Typography>
          <ToggleButtonGroup
            fullWidth
            color="primary"
            size="small"
            value={bedroom}
            onChange={handleChangeBedroom}
          >
            <ToggleButton value="any">Any</ToggleButton>
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="2">2</ToggleButton>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="4">4</ToggleButton>
            <ToggleButton value="5">5</ToggleButton>
            <ToggleButton value="6">6+</ToggleButton>
          </ToggleButtonGroup>
          <Typography>Shelters</Typography>
          <ToggleButtonGroup
            fullWidth
            color="primary"
            size="small"
            value={bedroom}
            onChange={handleChangeBedroom}
          >
            <ToggleButton value="any">Any</ToggleButton>
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="2">2</ToggleButton>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="4">4</ToggleButton>
            <ToggleButton value="5">5</ToggleButton>
            <ToggleButton value="6">6+</ToggleButton>
          </ToggleButtonGroup>
          <Typography>BathRooms</Typography>
          <ToggleButtonGroup
            fullWidth
            color="primary"
            size="small"
            value={bedroom}
            onChange={handleChangeBedroom}
          >
            <ToggleButton value="any">Any</ToggleButton>
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="2">2</ToggleButton>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="4">4</ToggleButton>
            <ToggleButton value="5">5</ToggleButton>
            <ToggleButton value="6">6+</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Box>
    </Stack>
  );
}

export default RoomBed;

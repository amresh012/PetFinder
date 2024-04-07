// import React from 'react'

import { Box, Card, Typography, Button, Stack, Divider } from "@mui/material";
import TypeOfPet from "./TypeOfPet";
import Price from "./Price";
import Organization from "./Organization";

const Filter = () => {
  return (
    <Box
      sx={{
        py: 1,
        px: 1,
      }}
    >
      <Card sx={{ minWidth: "auto", pb: 3 }}>
        <Box
          sx={{
            mb: 2,
            py: 2,
            px: 3,
          }}
        >
          <Stack
            direction="row"
            alignitems="center"
            justifyContent="space-between"
          >
            <Typography>Filters</Typography>
            <Button size="small">Clear All Filters</Button>
          </Stack>
        </Box>
        <Stack spacing={2} sx={{ px: 3 }}>
          <TypeOfPet />
          <Divider orientation="horizontal" />
          <Price />
          <Divider orientation="horizontal" />
          <Organization />
          <Divider orientation="horizontal" />
        </Stack>
      </Card>
    </Box>
  );
};

export default Filter;

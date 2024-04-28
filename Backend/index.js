/* eslint-disable no-undef */
import express from 'express';
// import mongoose from "mongoose";
const app = express();

const PORT = process.env.PORT || 3000;

// mongodb connection
const name = [
  {
    id: 1,
    name: "rahulkk",
  },
  {
    id: 2,
    name: "rahullll",
  },
  {
    id: 3,
    name: "rahul",
  },
    {
        id: 4,
        name: "rahul",
    },
  {
    id: 5,
    name: "rahul",
  }
];

app.get("/api/name", (req, res)=>{
    res.send(name);
})

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FaSearch } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 3,
  px: 4,
  py: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleSearch = () => {
    let search = document.getElementById("search");
    if (search.value === "")
      alert("Please Provide searchterm")
  }

  return (
    <div className="hidden md:block">
      <Button onClick={handleOpen}>
        <FaSearch size={20} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="search"
            name="search"
            id="search"
            className="h-11  rounded-l-full border-2 border-blue-500 hover:outline-none  px-4 italic focus-within:shadow-md"
            placeholder="Search for your pet..."
            maxLength="20"
          />
          <button
            type="submit"
            className=" bg-blue-500 py-[10px]  text-white text-center uppercase  border-l-0 px-4 font-medium rounded-r-full"
            onClick={handleSearch}
          >
            search
          </button>
        </Box>
      </Modal>
    </div>
  );
}

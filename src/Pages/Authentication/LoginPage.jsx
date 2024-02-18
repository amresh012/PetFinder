import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Form from "../../Util/Form.Utility";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  // bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  px: 2,
  py: 2,
};

const Style = {
  border: "1px solid blue",
  borderRadius: 3,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={Style}>
        <div className="Action-btn  p-2 rounded-md ">
          <button type="submit">Login/SignUp</button>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="m-4 h-auto"
      >
        <Box sx={style} className="bg-white">
          <Form />
        </Box>
      </Modal>
    </div>
  );
}

import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import thumbsup from "../assets/thumbsup.png";
import CloseIcon from "@mui/icons-material/Close";

function Popup() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // Automatically open the dialog after 2 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{textAlign: "right", width: "100%"}}><CloseIcon onClick={handleClose} sx={{cursor: "pointer"}} /></div>
        <img style={{ width: 250 }} src={thumbsup} alt="thumbsup" />
        <DialogTitle id="alert-dialog-title">Please Note!</DialogTitle>
        <DialogContentText id="alert-dialog-description">
          Sometimes the final prices of the quotations will be updated within
          1-2 hrs. You will be notified on your WhatsApp. If you have any
          questions you can reach out to us at contact@bizzowl.com or call us at
          +919354651433.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Okay</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Popup;

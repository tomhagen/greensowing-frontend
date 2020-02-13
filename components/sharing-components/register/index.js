import "./index.scss";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const RegisterButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let styles = {
    dialog: {
      marginBottom: "20px",
      boxShadow: "1px 1px 10px 0px rgba(0,0,0,0.3)",
      fontSize: "20px"
    }
  };
  return (
    <React.Fragment>
      <div className="register">
        <div className="register_container">
          <div className="register_box">
            <Link href="#">
              <a onClick={handleClickOpen}>register to visit farm</a>
            </Link>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={styles.dialog}>
          FILLING IN YOUR INFORMATION
        </DialogTitle>
        <DialogContent>
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Your mobile number"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Your message"
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default RegisterButton;

import React from "react";
import "./Register.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <a href="#" class="button" onClick={handleClickOpen}>
        REGISTER
      </a>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div id="dialog">
          <DialogTitle id="form-dialog-title">Sign Up For StudyUP</DialogTitle>
          <DialogContent>
            <DialogContentText />
            <TextField
              className="Name"
              margin="dense"
              id="Name"
              label="Your Name"
              type="name"
              fullWidth
              required="true"
            />
            <div id="text_fields">
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                required="true"
              />
              <TextField
                className="text"
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                required="true"
              />
              <div id="or">
                <hr />
                <h2>OR</h2>
                <hr />
              </div>
              <div id="social_logins">
                <a id="haha" href="#">
                  Login With
                  <span>
                    <i className="devicon-facebook-plain colored" />
                  </span>
                </a>
                <a>
                  Login With <i class="devicon-google-plain colored" />
                </a>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              <p id="account_already">
                Already Have An Account?
                <a id="sign" href="#">
                  Sign-In Here
                </a>
              </p>
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

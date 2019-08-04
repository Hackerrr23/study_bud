import React, { useState, useEffect } from "react";
import "./Register.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//firebase
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import "../../firebase";
// import "./firebaseui-styling.global.css";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  },
  CredentialHelper: "none"
};

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [open_fire, setOpen_fire] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    loginUser();
  }, []);
  function openDialog() {
    setOpen(true);
  }

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClickOpen2() {
    setOpen2(true);
  }
  //toggle register and login
  function handleClose() {
    setOpen(false);
    setOpen2(true);
  }
  function handleClose2() {
    setOpen2(false);
    setOpen(true);
  }
  //cancel buttons
  function handleClose_0() {
    setOpen(false);
  }
  function handleClose_1() {
    setOpen2(false);
  }

  function loginUser() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        const info = {
          displayName: user.displayName,
          email: user.email,
          firebaseId: user.uid,
          profileImg: user.photoURL
        };
        setSignedIn(true);
        setOpen_fire(false);
        // ...
      } else {
        // User is signed out.
        // ...
        setSignedIn(false);
        return false;
      }
    });
  }
  return (
    <div>
      <div id="social_logins_1">
        <a href="#" class="button" onClick={handleClickOpen}>
          REGISTER
        </a>
        <a href="#" class="button2" onClick={handleClickOpen2}>
          LOGIN
        </a>
      </div>
      <Dialog open={open_fire} onClose={() => setOpen_fire(false)}>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </Dialog>
      <Dialog
        // className="animated bounce"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disableBackdropClick="true"
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
                <a onClick={() => setOpen_fire(true)} href="#">
                  Login With
                  <i class="devicon-google-plain colored" />
                </a>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <p id="account_already">
              Already Have An Account?
              <a id="sign" href="#" onClick={handleClose}>
                Sign-In Here
              </a>
            </p>
          </DialogActions>
          <Button
            onClick={handleClose_0}
            color="primary"
            className="cancel_dialog"
          >
            Cancel
          </Button>
        </div>
      </Dialog>
      {/* Sign In Dialog */}
      <Dialog
        className="animated slideInRight"
        open={open2}
        onClose={handleClose_0}
        aria-labelledby="form-dialog-title"
        disableBackdropClick="true"
      >
        <div id="dialog">
          <DialogTitle id="form-dialog-title">Sign In For StudyUP</DialogTitle>
          <DialogContent>
            <h1>I love you</h1>
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
                  Login With
                  <i class="devicon-google-plain colored" />
                </a>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <p id="account_already">
              Already Have An Account?
              <a id="sign" href="#" onClick={handleClose2}>
                Sign-In Here
              </a>
            </p>
          </DialogActions>
          <Button
            onClick={handleClose_1}
            color="primary"
            className="cancel_dialog"
          >
            Cancel
          </Button>
        </div>
      </Dialog>
      <div id="sign_in_dialog">
        <h1>Hello just testing</h1>
      </div>
    </div>
  );
}

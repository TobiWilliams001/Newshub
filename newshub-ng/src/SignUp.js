// src/SignUp.js
import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { auth, googleProvider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";

function SignUp() {
  const handleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("User signed up");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign up for NewsHub NG
      </Typography>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSignUp}
        style={{ marginTop: "16px" }}
      >
        Sign up with Google
      </Button>
    </Container>
  );
}

export default SignUp;

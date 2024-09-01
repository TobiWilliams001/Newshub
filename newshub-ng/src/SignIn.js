// src/SignIn.js
import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { auth, googleProvider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";

function SignIn() {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("User signed in");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign in to NewsHub NG
      </Typography>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSignIn}
        style={{ marginTop: "16px" }}
      >
        Sign in with Google
      </Button>
    </Container>
  );
}

export default SignIn;

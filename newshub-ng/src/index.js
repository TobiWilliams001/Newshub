// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

ReactDOM.render(
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>,
    document.getElementById("root")
  );
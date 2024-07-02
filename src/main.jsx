import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppWrapper from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_CLIENT_ID}>
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

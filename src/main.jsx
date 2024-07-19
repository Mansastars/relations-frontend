import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppWrapper from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_CLIENT_ID}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppWrapper />
      </QueryClientProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

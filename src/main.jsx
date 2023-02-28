import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import supabase from "./config/supabaseClient";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SessionContextProvider supabaseClient={supabase}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SessionContextProvider>
    </LocalizationProvider>
  </React.StrictMode>
);

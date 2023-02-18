import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as dotenv from "dotenv";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ehqhklbwuoogzwuowrkq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVocWhrbGJ3dW9vZ3p3dW93cmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1NzczODcsImV4cCI6MTk5MjE1MzM4N30.5eA5tbpq3HYTbqqKje9_fnG9RDWoRPYHsLvQ3HgIt1A"
);

const Login = () => {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      console.log("signed in");
      navigate("/dashboard");
    } else if (event === "SIGNED_OUT") {
      console.log("signed out");
      navigate("/");
    }
  });
  return (
    <Box m="50px">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
      />
    </Box>
  );
};

export default Login;

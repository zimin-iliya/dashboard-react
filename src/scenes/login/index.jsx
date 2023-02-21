import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseClient";



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

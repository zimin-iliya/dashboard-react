import { Box } from "@mui/material";
import dotenv from  'dotenv'
import Header from "../../componets/Header";
// import supabase from "../../config/supabaseClient";

const Dashboard = () => {
 return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;

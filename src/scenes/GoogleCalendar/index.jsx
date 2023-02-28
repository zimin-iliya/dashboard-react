import React, { useState } from "react";
import dayjs from "dayjs";
import { Box, Button, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import supabase from "../../config/supabaseClient";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import { tokens } from "../../theme";

const GoogleCalendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = React.useState(dayjs());
  console.log(value.date());
  const session = useSession();
  const supabaseClient = useSupabaseClient();
  const { isLoading } = useSessionContext();

  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const googleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      console.log(error);
    }
  };

  async function createCalendarEvent() {
    console.log("Creating calendar event");
    const event = {
      'summary': eventName,
      'description': eventDescription,
      'start': {
        'dateTime': value.toISOString(), // Date.toISOString() ->
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
      },
      'end': {
        'dateTime': value.toISOString(), // Date.toISOString() ->
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
      }
    }
    await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        'Authorization':'Bearer ' + session.provider_token // Access token for google
      },
      body: JSON.stringify(event)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      alert("Event created, check your Google Calendar!");
    });
  }

  async function signOut() {
    await supabaseClient.auth.signOut();
  }

  console.log(session);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          maxWidth: 400,
          margin: "10px 0",
        }}
      >
        <Box sx={{ gridColumn: "span 2", margin: "20px" }}>
          <p>{value.toString()}</p>
          <MobileDatePicker
            sx={{
              backgroundColor: colors.greenAccent[500],
              color: "text.primary",
              button: { color: "text.primary" },
              margin: "20px",
            }}
            label="Date mobile"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
        <Box>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Event Name"
            onChange={(e) => setEventName(e.target.value)}
            value={eventName}
            name="Event Name"
            sx={{ gridColumn: "span 2", margin: "20px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Event Description"
            onChange={(e) => setEventDescription(e.target.value)}
            value={eventDescription}
            name="Event Description"
            sx={{ gridColumn: "span 2", margin: "20px" }}
          />
          <Button
            sx={{
              margin: "20px",
              color: "white",
              backgroundColor: "#3f51b5",
            }}
            onClick={() => createCalendarEvent()}
          >
            Create Event
          </Button>
        </Box>

        {session ? (
          <Box sx={{ gridColumn: "span 2", margin: "20px" }}>
            <h1>Logged in {session.user.email}</h1>
            <button onClick={() => signOut()}>Sign Out</button>
          </Box>
        ) : (
          <Box>
            <button onClick={() => googleSignIn()}>Sign in with Google</button>
          </Box>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default GoogleCalendar;

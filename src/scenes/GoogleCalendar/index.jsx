import React from 'react';
require('dotenv').config()
import {
    google,   // The top level object used to access services
  } from 'googleapis';
import { GoogleOAuthProvider } from '@react-oauth/google';


const oAuth2Client = new OAuth2(
    process.env.REACT_APP_GOOGLE_CLIENT_ID,
    process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
)
oAuth2Client.setCredentials({refresh_token: process.env.REACT_APP_GOOGLE_REFRESH_TOKEN})

const calendar = google.calendar({version: 'v3', auth: oAuth2Client})

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 2)
const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 2)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

const event = {
    summary: 'Google Calendar API Integration',
    location: '800 Howard St., San Francisco, CA 94103',
    description: 'Learn how to integrate Google Calendar API into your app',
    colorId: 1,
    start: {
        dateTime: eventStartTime,
        timeZone: 'America/Los_Angeles',
    },
    end: {
        dateTime: eventEndTime,
        timeZone: 'America/Los_Angeles',
    },
}
// const GoogleCalendar = () => {


// }

export default GoogleCalendar;

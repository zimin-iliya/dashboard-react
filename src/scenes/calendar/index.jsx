import React from 'react'
import { useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // a plugin!
import listPlugin from '@fullcalendar/list' // a plugin!
import { Box, List, ListItem, ListItemText, Typography, useTheme} from '@mui/material'
import Header from '../../componets/Header'
import { tokens } from "../../theme";

const Calendar = () => {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const [currentEvents, setCurrentEvents] = useState([])

const handleDateClick = (selected) => {
    const title = promt("Enter Event Title")
    const calendarApi = selected.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
        calendarApi.addEvent({
            title,
            start: selected.dateStr,
            allDay: selected.allDay
        })
    }
}
    
          return (
            <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
            />
          )
}



export default Calendar;
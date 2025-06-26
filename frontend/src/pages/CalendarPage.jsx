import React from 'react';
import CalendarGrid from '../components/CalendarGrid';

const CalendarPage = ({ currentMonth, events }) => (
  <CalendarGrid currentMonth={currentMonth} events={events} />
);

export default CalendarPage;

import React from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Navigation = ({ setView }) => (
  <nav className="w-64 bg-white from-blue-100 to-blue-50 min-h-screen max-h-screen p-6 shadow-md hidden md:block sticky top-0 border-r border-gray-200">
    <ul className="space-y-3">
      <p className='font-bold'>CALENDAR</p>
      <hr/>
      <li
        className="text-md font-semibold text-gray-800 flex items-center justify-start gap-2 font-bold cursor-pointer"
        onClick={() => setView('calendar')}
      >
        <CalendarMonthIcon sx={{ color: "#4680f2" }}/> Calendar
      </li>
      <li
        className="text-md text-gray-600 hover:text-blue-600 cursor-pointer flex items-center justify-start gap-2 font-bold"
        onClick={() => setView('tasks')}
      >
        <AddTaskIcon sx={{ color: "#4680f2" }} /> Tasks
      </li>
      <li
        className="text-md text-gray-600 hover:text-blue-600 cursor-pointer flex items-center justify-start gap-2 font-bold"
        onClick={() => setView('events')}
      >
        <EventNoteIcon sx={{ color: "#4680f2" }} /> Events
      </li>
    </ul>
  </nav>
);

export default Navigation;

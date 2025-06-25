import React from 'react';
import dayjs from 'dayjs';
import EventCard from './EventCard';

const CalendarGrid = ({ currentMonth, events }) => {
  const startOfMonth = dayjs(currentMonth).startOf('month');
  const endOfMonth = dayjs(currentMonth).endOf('month');
  const startDate = startOfMonth.startOf('week');
  const endDate = endOfMonth.endOf('week');

  let date = startDate.clone();
  const days = [];

  // 1. Weekday headers
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // 2. Loop through all days
  while (date.isBefore(endDate, 'day') || date.isSame(endDate, 'day')) {
    const formattedDate = date.format('YYYY-MM-DD');
    const dayEvents = events.filter(e => e.date === formattedDate);

    days.push(
      <div
        key={formattedDate}
        className={`border p-3 min-h-[120px] bg-white rounded shadow-sm flex flex-col overflow-hidden ${
          date.isSame(dayjs(), 'day') ? 'border-blue-500 ring-2 ring-blue-300' : ''
        }`}
      >
        <div className="text-gray-600 font-bold text-sm mb-1">{date.date()}</div>
        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 pr-1">
          {dayEvents.map((event, idx) => (
            <EventCard key={idx} event={event} />
          ))}
        </div>
      </div>
    );

    date = date.add(1, 'day');
  }

  return (
    <div className="p-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Weekday headers row */}
      <div className="grid grid-cols-7 gap-1 mb-2 text-center font-semibold text-gray-600">
        {weekDays.map((day, idx) => (
          <div className='bg-gray-400 rounded p-1' key={idx}>{day}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {days}
      </div>
    </div>
  );
};

export default CalendarGrid;

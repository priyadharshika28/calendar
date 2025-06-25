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

  while (date.isBefore(endDate, 'day')) {
    const dayEvents = events.filter(e => dayjs(e.date).isSame(date, 'day'));

    days.push(
      <div
        key={date.format('YYYY-MM-DD')}
        className={`border p-3 min-h-[120px] bg-white rounded-xl shadow-sm flex flex-col overflow-hidden ${date.isSame(dayjs(), 'day') ? 'border-blue-500 ring-2 ring-blue-300' : ''}`}
      >
        <div className="text-gray-600 font-bold text-sm mb-1">{date.date()}</div>
        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400 pr-1">
          {dayEvents.map((event, idx) => <EventCard key={idx} event={event} />)}
        </div>
      </div>
    );
    date = date.add(1, 'day');
  }

  return (
    <div className="grid grid-cols-7 gap-4 p-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {days}
    </div>
  );
};

export default CalendarGrid;
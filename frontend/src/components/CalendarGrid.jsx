import React from 'react';
import dayjs from 'dayjs';
import EventCard from './EventCard';

const CalendarGrid = ({ currentMonth, events }) => {
  const startDate = dayjs(currentMonth).startOf('month').startOf('week');
  const endDate = dayjs(currentMonth).endOf('month').endOf('week');
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const days = [];
  let date = startDate.clone();

  while (date.isBefore(endDate, 'day') || date.isSame(endDate, 'day')) {
    const formatted = date.format('YYYY-MM-DD');
    const dayEvents = events.filter(e => e.date === formatted);

    days.push(
      <div key={formatted} className={`border p-3 min-h-[120px] bg-white rounded shadow-sm flex flex-col overflow-hidden ${date.isSame(dayjs(), 'day') ? 'border-blue-500 ring-2 ring-blue-300' : ''}`}>
        <div className="text-gray-600 font-bold text-sm mb-1">{date.date()}</div>
        <div className="overflow-y-auto scrollbar-thin pr-1">
          {dayEvents.map((e, i) => <EventCard key={i} event={e} />)}
        </div>
      </div>
    );

    date = date.add(1, 'day');
  }

  return (
    <div className="p-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="grid grid-cols-7 gap-1 mb-2 text-center font-semibold text-gray-600">
        {weekDays.map((d, i) => <div className="bg-gray-400 text-white rounded p-1" key={i}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">{days}</div>
    </div>
  );
};

export default CalendarGrid;

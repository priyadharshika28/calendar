import React from 'react';

const EventCard = ({ event }) => (
  <div className="text-xs text-white font-medium px-2 py-1 rounded shadow-md mb-1" style={{ backgroundColor: event.color }}>
    <span className="block truncate">{event.title}</span>
    <span className="text-[0.65rem] font-light">{event.startTime} - {event.endTime}</span>
  </div>
);

export default EventCard;

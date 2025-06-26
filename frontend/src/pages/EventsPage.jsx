import React from 'react';

const EventsPage = ({ events }) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">All Events</h2>
    <div className="space-y-4">
      {events.length === 0 ? (
        <p className="text-gray-500">No events available.</p>
      ) : (
        events.map((event, idx) => (
          <div
            key={idx}
            className="p-4 rounded shadow-md text-white"
            style={{ backgroundColor: event.color }}
          >
            <h3 className="font-bold text-lg">{event.title}</h3>
            <p className="text-sm">📅 {event.date} | 🕒 {event.startTime} - {event.endTime}</p>
          </div>
        ))
      )}
    </div>
  </div>
);

export default EventsPage;

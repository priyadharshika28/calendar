import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CalendarGrid from './components/CalendarGrid';
import EventModal from './components/EventModal';
import TaskManager from './components/TaskManager';
import './styles/index.css';
import AddIcon from '@mui/icons-material/Add';

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [view, setView] = useState('calendar'); // calendar | tasks | events

  useEffect(() => {
    const stored = localStorage.getItem('calendar_events');
    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, []);

  const addEvent = (newEvent) => {
    setEvents(prev => {
      const updated = [...prev, newEvent];
      localStorage.setItem('calendar_events', JSON.stringify(updated));
      return updated;
    });
  };

  const handlePrev = () => setCurrentMonth(currentMonth.subtract(1, 'month'));
  const handleNext = () => setCurrentMonth(currentMonth.add(1, 'month'));

  return (
    <div className="flex font-sans">
      {/* Pass setView to Navigation */}
      <Navigation setView={setView} />
      <div className="flex-1 flex flex-col">
        <Header currentMonth={currentMonth} onPrev={handlePrev} onNext={handleNext} />

        {/* Only show Add Event button in calendar view */}
        {view === 'calendar' && (
          <div className="px-6 mt-4 flex justify-end items-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center gap-1"
            >
              <AddIcon /> Add Event
            </button>
          </div>
        )}

        {/* Conditional Views */}
        {view === 'calendar' && (
          <CalendarGrid
            currentMonth={currentMonth}
            events={events}
          />
        )}

        {view === 'tasks' && <TaskManager />}

        {view === 'events' && (
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
                    <p className="text-sm">
                      📅 {event.date} | 🕒 {event.startTime} - {event.endTime}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal only for calendar view */}
      {showModal && view === 'calendar' && (
        <EventModal
          onClose={() => setShowModal(false)}
          onAdd={addEvent}
        />
      )}
    </div>
  );
};

export default App;

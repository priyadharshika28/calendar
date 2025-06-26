import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Navigation from './components/Navigation';
import Header from './components/Header';
import EventModal from './components/EventModal';
import CalendarPage from './pages/CalendarPage';
import TaskManager from './pages/TaskManager';
import EventsPage from './pages/EventsPage';
import './styles/index.css';
import AddIcon from '@mui/icons-material/Add';

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [view, setView] = useState('calendar');
  const [isSidebarOpen, setSidebarOpen] = useState(false); // For mobile

  useEffect(() => {
    const stored = localStorage.getItem('calendar_events');
    if (stored) setEvents(JSON.parse(stored));
  }, []);

  const addEvent = (newEvent) => {
    const updated = [...events, newEvent];
    setEvents(updated);
    localStorage.setItem('calendar_events', JSON.stringify(updated));
  };

  const handlePrev = () => setCurrentMonth(currentMonth.subtract(1, 'month'));
  const handleNext = () => setCurrentMonth(currentMonth.add(1, 'month'));

  return (
    <div className="flex font-sans">
      <Navigation
        setView={setView}
        currentView={view}
        isMobileOpen={isSidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col">
        <Header
          currentMonth={currentMonth}
          onPrev={handlePrev}
          onNext={handleNext}
          toggleSidebar={() => setSidebarOpen(true)} // open sidebar on mobile
        />

        {view === 'calendar' && (
          <>
            <div className="px-6 mt-4 flex justify-end items-center">
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center gap-1"
              >
                <AddIcon /> Add Event
              </button>
            </div>
            <CalendarPage currentMonth={currentMonth} events={events} />
          </>
        )}

        {view === 'tasks' && <TaskManager />}
        {view === 'events' && <EventsPage events={events} />}
      </div>

      {showModal && view === 'calendar' && (
        <EventModal onClose={() => setShowModal(false)} onAdd={addEvent} />
      )}
    </div>
  );
};

export default App;

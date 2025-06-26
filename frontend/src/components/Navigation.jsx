import React from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';

const Navigation = ({ setView, currentView, isMobileOpen, closeSidebar }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="w-64 bg-white min-h-screen max-h-screen px-6 py-8 shadow-lg hidden md:block sticky top-0 border-r border-gray-200 z-10">
        <SidebarContent setView={setView} currentView={currentView} />
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden">
          <div className="w-64 h-full bg-white shadow-lg p-6 absolute left-0 top-0 z-40">
            <div className="flex justify-between items-center mb-6">
              <p className="text-lg font-extrabold text-gray-800">CALENDAR</p>
              <button onClick={closeSidebar} className="text-gray-700 hover:text-red-600">
                <CloseIcon />
              </button>
            </div>
            <SidebarContent setView={setView} currentView={currentView} closeSidebar={closeSidebar} />
          </div>
        </div>
      )}
    </>
  );
};

const SidebarContent = ({ setView, currentView, closeSidebar }) => (
  <ul className="space-y-4">

    <div className='w-full flex items-center justify-center font-bold'>CALENDAR</div>
    <hr />
    <li
      onClick={() => {
        setView('calendar');
        closeSidebar?.();
      }}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
        currentView === 'calendar'
          ? 'bg-blue-100 text-blue-600 font-bold'
          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
      }`}
    >
      <CalendarMonthIcon sx={{ color: "#4680f2" }} /> Calendar
    </li>

    <li
      onClick={() => {
        setView('tasks');
        closeSidebar?.();
      }}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
        currentView === 'tasks'
          ? 'bg-blue-100 text-blue-600 font-bold'
          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
      }`}
    >
      <AddTaskIcon sx={{ color: "#4680f2" }} /> Tasks
    </li>

    <li
      onClick={() => {
        setView('events');
        closeSidebar?.();
      }}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
        currentView === 'events'
          ? 'bg-blue-100 text-blue-600 font-bold'
          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
      }`}
    >
      <EventNoteIcon sx={{ color: "#4680f2" }} /> Events
    </li>
  </ul>
);

export default Navigation;

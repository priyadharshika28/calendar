import React from 'react';

const Navigation = () => (
  <nav className="w-64 bg-gradient-to-b from-blue-100 to-blue-50 min-h-screen p-6 shadow-md hidden md:block">
    <ul className="space-y-6">
      <li className="text-xl font-semibold text-gray-800">📅 Calendar</li>
      <li className="text-lg text-gray-600 hover:text-blue-600 cursor-pointer">📝 Tasks</li>
      <li className="text-lg text-gray-600 hover:text-blue-600 cursor-pointer">📆 Events</li>
    </ul>
  </nav>
);

export default Navigation;
import React from 'react';
import dayjs from 'dayjs';

const Header = ({ currentMonth, onPrev, onNext, toggleSidebar }) => (
  <div className="flex justify-between items-center p-3 bg-white shadow-md border-b sticky top-0 z-20 border-gray-200">
    <div className="flex items-center gap-4">
      {/* Mobile Menu Icon */}
      <button onClick={toggleSidebar} className="md:hidden text-2xl text-gray-700 hover:text-blue-600">
        ☰
      </button>
      <button onClick={onPrev} className="text-2xl font-bold hover:text-blue-600">❮</button>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{dayjs(currentMonth).format('MMMM YYYY')}</h2>
    <button onClick={onNext} className="text-2xl font-bold hover:text-blue-600">❯</button>
  </div>
);

export default Header;

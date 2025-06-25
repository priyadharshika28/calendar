import React from 'react';
import dayjs from 'dayjs';

const Header = ({ currentMonth, onPrev, onNext }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-white shadow-md border-b sticky top-0 z-10 border-gray-200">
      <button onClick={onPrev} className="text-2xl font-bold hover:text-blue-600 transition">❮</button>
      <h2 className="text-3xl font-bold text-gray-800">{dayjs(currentMonth).format('MMMM YYYY')}</h2>
      <button onClick={onNext} className="text-2xl font-bold hover:text-blue-600 transition">❯</button>
    </div>
  );
};

export default Header;
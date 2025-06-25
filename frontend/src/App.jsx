import React, { useState } from 'react';
import dayjs from 'dayjs';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CalendarGrid from './components/CalendarGrid';
import events from './data/events.json';
import './styles/index.css'

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const handlePrev = () => setCurrentMonth(currentMonth.subtract(1, 'month'));
  const handleNext = () => setCurrentMonth(currentMonth.add(1, 'month'));

  return (
    <div className="flex font-sans">
      <Navigation />
      <div className="flex-1 flex flex-col">
        <Header currentMonth={currentMonth} onPrev={handlePrev} onNext={handleNext} />
        <CalendarGrid currentMonth={currentMonth} events={events} />
      </div>
    </div>
  );
};

export default App;

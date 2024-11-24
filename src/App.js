import React, { useState } from "react";
import "./App.css";

function generateCalendar(month, year) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendar = [];
  let week = Array(firstDay).fill(null); 

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7 || day === daysInMonth) {
      calendar.push(week);
      week = [];
    }
  }

  return calendar;
}

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const calendar = generateCalendar(currentMonth, currentYear);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Prototype Calendar</h1>
        <div className="calendar-controls">
          <button onClick={handlePrevMonth}>Previous</button>
          <h2>
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
            })}{" "}
            {currentYear}
          </h2>
          <button onClick={handleNextMonth}>Next</button>
        </div>
        <div className="calendar">
          <div className="calendar-header">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="calendar-day-name">
                {day}
              </div>
            ))}
          </div>
          <div className="calendar-body">
            {calendar.map((week, i) => (
              <div key={i} className="calendar-week">
                {week.map((day, j) =>
                  day ? (
                    <div
                      key={j}
                      className="calendar-day"
                      onClick={() => alert(`You clicked on ${day}`)}
                    >
                      {day}
                    </div>
                  ) : (
                    <div key={j} className="calendar-day empty"></div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

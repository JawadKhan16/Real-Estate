import React, { useState } from "react";

const Calendar = ({ setSelectedDate }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Handle date selection
  const handleDateClick = (day) => {
    const selected = new Date(currentYear, currentMonth, day);
    if (selected >= today) {
      setSelectedDate(selected);
    }
  };

  // Change month function
  const changeMonth = (direction) => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;

    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    } else if (newMonth < today.getMonth() && newYear === today.getFullYear()) {
      return;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  return (
    <div>
      <div className="flex justify-between items-center text-gray-900">
        <button
          onClick={() => changeMonth(-1)}
          disabled={currentMonth <= today.getMonth() && currentYear === today.getFullYear()}
          className="text-lg disabled:text-gray-300"
        >
          &lt;
        </button>
        <h2 className="text-xl font-semibold">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <button onClick={() => changeMonth(1)} className="text-lg">
          &gt;
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-2 mt-3 text-center text-gray-600 font-semibold">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="p-2">{day}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 text-center text-gray-900">
        {/* Empty Slots for Start of Month */}
        {Array.from({ length: firstDay }, (_, i) => (
          <div key={`empty-${i}`} className="p-2"></div>
        ))}

        {/* Days in Month */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const isPast = new Date(currentYear, currentMonth, day) < today;

          return (
            <button
              key={day}
              disabled={isPast}
              onClick={() => handleDateClick(day)}
              className={`w-10 h-10 flex items-center justify-center rounded-full 
                ${isPast ? "text-gray-300 cursor-not-allowed" : "hover:bg-orange-500 hover:text-white"}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

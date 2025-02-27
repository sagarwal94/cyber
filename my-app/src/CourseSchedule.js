import React from 'react';
import './App.css';

const CourseSchedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const timeSlots = [];
  for (let hour = 9; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 60) {
      timeSlots.push(`${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`);
    }
  }
  
  return (
    <div className="course-schedule-container">
      <h1 className="schedule-title">Course Schedule</h1>
      <div className="schedule-divider"></div>
      
      <table className="schedule-table">
        <thead>
          <tr>
            <th></th>
            {days.map((day, index) => (
              <th key={index} className="day-header">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, timeIndex) => (
            <tr key={timeIndex} className="time-row">
              <td className="time-cell">{time}</td>
              {days.map((day, dayIndex) => (
                <td key={dayIndex} className="day-cell"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseSchedule;

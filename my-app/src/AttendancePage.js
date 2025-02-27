import React, { useState } from 'react';
import './AttendancePage.css';

const StudentAttendance = ({ role }) => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [attendance, setAttendance] = useState({});
  const [courseDates, setCourseDates] = useState({});

  const courses = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' }
  ];

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const years = [2020, 2021, 2022, 2023, 2024, 2025];

  const handleAttendanceChange = (courseId, value) => {
    setAttendance({ ...attendance, [courseId]: value });
  };

  const handleDateChange = (courseId, value) => {
    setCourseDates({ ...courseDates, [courseId]: value });
  };

  return (
    <div className="attendance-container">
      <h2>STUDENT ATTENDANCE</h2>

      <div className="attendance-filters">
        <div className="filter-group">
          <label>Month/Year:</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="month-select"
          >
            <option value="">-Month-</option>
            {months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="year-select"
          >
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="attendance-list">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <div className="course-header">
              <span>{course.name}</span>
              {role === 'admin' ? (
                <input
                  type="date"
                  value={courseDates[course.id] || course.date}
                  onChange={(e) => handleDateChange(course.id, e.target.value)}
                />
              ) : (
                <span className="course-date">{course.date}</span>
              )}
              <select
                className="attendance-dropdown"
                value={attendance[course.id] || ''}
                onChange={(e) => handleAttendanceChange(course.id, e.target.value)}
              >
                <option value="">Select Attendance</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentAttendance;

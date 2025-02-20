import { useState } from "react";

const StudentAttendance = () => {
  const [view, setView] = useState("monthly"); // 'monthly' or 'course'
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const courses = [
    { name: "Course 1", date: "27/01/2025" },
    { name: "Course 2", date: "28/01/2025" },
    { name: "Course 3", date: "31/01/2025" },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">STUDENT ATTENDANCE</h2>

      <div className="flex gap-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={view === "monthly"}
            onChange={() => setView("monthly")}
          />
          Monthly
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={view === "course"}
            onChange={() => setView("course")}
          />
          Course
        </label>
      </div>

      {view === "monthly" && (
        <div className="mt-4">
          <label className="block mb-2">Month/Year:</label>
          <div className="flex gap-4">
            <select
              className="border p-2 rounded"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="">-Month-</option>
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                (month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                )
              )}
            </select>

            <select
              className="border p-2 rounded"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">-Year-</option>
              {[2024, 2025, 2026].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Show
          </button>
        </div>
      )}

      {view === "course" && (
        <div className="mt-4">
          {courses.map((course, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{course.name}</h3>
              <p className="text-sm">Date: {course.date} 📅</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Show
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentAttendance;
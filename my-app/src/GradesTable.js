import React, { useState, useEffect } from "react";

function GradesTable() {
  // Fetch the user role from localStorage (or you could use a backend API)
  const [userRole, setUserRole] = useState("student");

  // Example of how to fetch user role from local storage:
  useEffect(() => {
    const role = localStorage.getItem("userRole"); // Assume userRole is saved as "student" or "admin"
    if (role) {
      setUserRole(role);
    }
  }, []);

  const semesters = [
    { id: 1, name: "1/2 Semester-1" },
    { id: 2, name: "1/2 Semester-2" },
    { id: 3, name: "1/2 Semester-3" },
    { id: 4, name: "1/2 Semester-4" }
  ];

  // Initializing state to keep track of GPA for each course and CGPA/SGPA
  const [grades, setGrades] = useState({
    1: { course1: 0, course2: 0, course3: 0 },
    2: { course1: 0, course2: 0, course3: 0 },
    3: { course1: 0, course2: 0, course3: 0 },
    4: { course1: 0, course2: 0, course3: 0 },
  });

  const [cgpa, setCgpa] = useState(0);
  const [sgpa, setSgpa] = useState({});

  // Helper function to calculate SGPA for a semester
  const calculateSGPA = (semesterId) => {
    const semesterGrades = Object.values(grades[semesterId]);
    const validGrades = semesterGrades.filter(grade => !isNaN(grade) && grade >= 0);
    const totalGrades = validGrades.reduce((a, b) => a + b, 0);
    return validGrades.length ? totalGrades / validGrades.length : 0;
  };

  // Helper function to calculate CGPA (based on all semesters)
  const calculateCGPA = () => {
    const allGrades = Object.values(grades).flatMap(semester => Object.values(semester));
    const validGrades = allGrades.filter(grade => !isNaN(grade) && grade >= 0);
    const totalCgpa = validGrades.reduce((a, b) => a + b, 0);
    return validGrades.length ? totalCgpa / validGrades.length : 0;
  };

  // Handler for changing GPA value (only for admin)
  const handleGradeChange = (semesterId, courseId, value) => {
    if (userRole === "admin") {
      const newGrades = { ...grades };
      newGrades[semesterId][courseId] = parseFloat(value);
      setGrades(newGrades);
    }
  };

  // Update CGPA and SGPA whenever grades change
  useEffect(() => {
    // Recalculate SGPA for each semester
    const newSgpa = {};
    semesters.forEach(semester => {
      newSgpa[semester.id] = calculateSGPA(semester.id);
    });
    setSgpa(newSgpa);

    // Recalculate CGPA
    setCgpa(calculateCGPA());
  }, [grades]);

  return (
    <div className="grades-container">
      {/* Grades Header */}
      <div className="header-section">
        <h1 className="grades-title">GRADES</h1>
      </div>

      <div className="dotted-separator"></div>

      {/* Semester Sections */}
      {semesters.map((semester) => (
        <div key={semester.id} className="semester-section">
          <h2 className="semester-title">{semester.name}</h2>
          <table className="grades-table">
            <tbody>
              <tr>
                <td></td>
                <th>Course 1</th>
                <th>Course 2</th>
                <th>Course 3</th>
                <th>CGPA</th>
                <th>SGPA</th>
              </tr>
              <tr>
                <td className="first-cell">Grades</td>
                {/* Course 1 */}
                <td>
                  {userRole === "student" ? (
                    <span>{grades[semester.id].course1}</span>
                  ) : (
                    <select
                      value={grades[semester.id].course1}
                      onChange={(e) => handleGradeChange(semester.id, "course1", e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  )}
                </td>
                {/* Course 2 */}
                <td>
                  {userRole === "student" ? (
                    <span>{grades[semester.id].course2}</span>
                  ) : (
                    <select
                      value={grades[semester.id].course2}
                      onChange={(e) => handleGradeChange(semester.id, "course2", e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  )}
                </td>
                {/* Course 3 */}
                <td>
                  {userRole === "student" ? (
                    <span>{grades[semester.id].course3}</span>
                  ) : (
                    <select
                      value={grades[semester.id].course3}
                      onChange={(e) => handleGradeChange(semester.id, "course3", e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  )}
                </td>
                {/* CGPA and SGPA */}
                <td>{cgpa.toFixed(2)}</td> {/* Display calculated CGPA */}
                <td>{sgpa[semester.id]?.toFixed(2) || "0.00"}</td> {/* Display calculated SGPA */}
              </tr>
            </tbody>
          </table>
        </div>
      ))}

      {/* Final CGPA */}
      <div className="final-cgpa">
        <p>CGPA: {cgpa.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default GradesTable;

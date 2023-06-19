import React from 'react';

function ReadData({ courses, onDeleteCourse, onEditCourse }) {
  const handleDelete = (id) => {
    onDeleteCourse(id);
  };

  const handleEdit = (id) => {
    onEditCourse(id);
  };

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>Course Name:</strong> {course.courseName}<br/>
            <strong>Description:</strong> {course.description}<br/>
            <strong>Duration:</strong> {course.duration}<br/>
            <strong>Instructor:</strong> {course.instructor}<br/>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadData;

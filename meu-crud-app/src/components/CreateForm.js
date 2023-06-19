import React, { useState, useEffect } from 'react';

function CreateForm({ onSaveCourse, editingCourse, courses }) {
  const [course, setCourse] = useState({ courseName: '', description: '', duration: '', instructor: '' });

  useEffect(() => {
    if (editingCourse !== null) {
      setCourse(courses[editingCourse]);
    }
  }, [editingCourse, courses]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSaveCourse(course);
    setCourse({ courseName: '', description: '', duration: '', instructor: '' });
  };

  return (
    <div>
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Course Name:
          <input type="text" name="courseName" value={course.courseName} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={course.description} onChange={handleChange} />
        </label>
        <label>
          Duration:
          <input type="text" name="duration" value={course.duration} onChange={handleChange} />
        </label>
        <label>
          Instructor:
          <input type="text" name="instructor" value={course.instructor} onChange={handleChange} />
        </label>
        <button type="submit">{editingCourse !== null ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
}

export default CreateForm;

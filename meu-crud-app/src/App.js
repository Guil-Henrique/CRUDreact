import React, { useState, useEffect } from 'react';
import CreateForm from './components/CreateForm';
import ReadData from './components/ReadData';

function App() {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('courses');
    if (storedData) {
      setCourses(JSON.parse(storedData));
    }
  }, []);

  const handleSaveCourse = (course) => {
    if (editingCourse !== null) {
      const updatedCourses = [...courses];
      updatedCourses[editingCourse] = course;
      setCourses(updatedCourses);
      setEditingCourse(null);
    } else {
      const updatedCourses = [...courses, course];
      setCourses(updatedCourses);
    }

    localStorage.setItem('courses', JSON.stringify([...courses, course]));
  };

  const handleDeleteCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  const handleEditCourse = (index) => {
    setEditingCourse(index);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cadastro de Cursos</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ marginRight: '300px' }}>
          <CreateForm onSaveCourse={handleSaveCourse} editingCourse={editingCourse} courses={courses} />
        </div>
        <div>
          <ReadData courses={courses} onDeleteCourse={handleDeleteCourse} onEditCourse={handleEditCourse} />
        </div>
      </div>
    </div>
  );
}

export default App;

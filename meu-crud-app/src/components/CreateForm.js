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
    <div style={{ textAlign: 'center' }}>
      <h2>Adicionar curso:</h2>
      <div style={{ display: 'inline-block', textAlign: 'left', border: '1px solid black', padding: '1em' }}>
        <form onSubmit={handleSubmit}>
          <label>
            Nome do curso:
            <br />
            <input type="text" name="courseName" value={course.courseName} onChange={handleChange} />
          </label>
          <br />
          <label>
            Descrição:
            <br />
            <input type="text" name="description" value={course.description} onChange={handleChange} />
          </label>
          <br />
          <label>
            Duração:
            <br />
            <input type="text" name="duration" value={course.duration} onChange={handleChange} />
          </label>
          <br />
          <label>
            Professor:
            <br />
            <input type="text" name="instructor" value={course.instructor} onChange={handleChange} />
          </label>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px',  }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              background: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {editingCourse !== null ? 'Salvar' : 'Adicionar'}
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default CreateForm;

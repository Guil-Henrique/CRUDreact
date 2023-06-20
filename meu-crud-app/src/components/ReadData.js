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
      <h2>Lista de cursos salvos:</h2>
      <ul style={{ border: '1px solid black', listStyleType: 'none' }}>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>Nome do curso:</strong> {course.courseName}<br/>
            <strong>Descrição:</strong> {course.description}<br/>
            <strong>Duração:</strong> {course.duration}<br/>
            <strong>Professor:</strong> {course.instructor}<br/>
            <button
              onClick={() => handleEdit(index)}
              style={{
                padding: '10px 20px',
                background: '#003C7D',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px',
                margin: '10px'
              }}
            >
              Editar
            </button>
            <button
              onClick={() => handleDelete(index)}
              style={{
                padding: '10px 20px',
                background: '#941111',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '10px'
              }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
      </div>
  );
}

export default ReadData;

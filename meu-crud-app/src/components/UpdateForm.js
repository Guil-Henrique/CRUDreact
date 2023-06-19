import React, { useState } from 'react';

function UpdateForm({ data }) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui você pode adicionar a lógica para atualizar os dados no localStorage ou enviar uma requisição para o servidor

    // Atualiza os dados no localStorage
    localStorage.setItem('data', JSON.stringify(formData));
  };

  return (
    <div>
      <h2>Update Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="courseName">Nome do curso:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName || ''}
          onChange={handleChange}
        />

        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description || ''}
          onChange={handleChange}
        />

        <label htmlFor="duration">Duração:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={formData.duration || ''}
          onChange={handleChange}
        />

        <label htmlFor="instructor">Professor:</label>
        <input
          type="text"
          id="instructor"
          name="instructor"
          value={formData.instructor || ''}
          onChange={handleChange}
        />

        <button type="submit" style={{ padding: '10px 20px', background: 'green', color: 'white' }}>
          Editar
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;

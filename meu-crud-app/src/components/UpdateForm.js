import React, { useState } from 'react';

function UpdateForm({ data }) {
  const [formData, setFormData] = useState({
    name: data.name,
    email: data.email,
  });

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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateForm;
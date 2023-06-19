import React from 'react';

function DeleteButton() {
  const handleDelete = () => {
    // Aqui você pode adicionar a lógica para excluir os dados do localStorage ou enviar uma requisição para o servidor

    // Remove os dados do localStorage
    localStorage.removeItem('data');
  };

  return (
    <div>
      <h2>Delete Button</h2>
      <button onClick={handleDelete}>Delete Data</button>
    </div>
  );
}

export default DeleteButton;
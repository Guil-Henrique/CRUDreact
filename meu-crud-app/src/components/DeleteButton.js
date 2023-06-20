import React from 'react';

function DeleteButton() {
  const handleDelete = () => {
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
import React from 'react';
import CreateForm from './components/CreateForm';
import ReadData from './components/ReadData';
import UpdateForm from './components/UpdateForm';
import DeleteButton from './components/DeleteButton';

function App() {
  return (
    <div>
      <h1>CRUD App</h1>
      <CreateForm />
      <ReadData />
      <UpdateForm />
      <DeleteButton />
    </div>
  );
}

export default App;
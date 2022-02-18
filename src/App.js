/** @format */

import React, { useState, Fragment } from 'react';
import AddFamily from './forms/AddFamily';
import EditFamily from './forms/EditFamily';
import Table from './tables/Table';

const App = () => {
  // Data
  const usersData = [
    { id: 1, name: 'juan', lastname: 'delaCruz', gender: 'male' },
    { id: 2, name: 'juana', lastname: 'delaCruz', gender: 'female' },
    { id: 3, name: 'andrea', lastname: 'sanoy', gender: 'female' },
  ];

  const initialFormState = { id: null, name: '', lastname: '', gender: '' };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      gender: user.gender,
    });
  };

  return (
    <div className='container'>
      <h1>Family tree crud</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <Fragment>
              <h2>Edit family</h2>
              <EditFamily
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add family</h2>
              <AddFamily addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className='flex-large'>
          <h2>Family</h2>
          <Table users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;

/** @format */

import React, { useState } from 'react';

const AddFamily = (props) => {
  const initialFormState = { id: null, name: '', lastname: '', gender: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.lastname || !user.gender) return;

        props.addUser(user);
        setUser(initialFormState);
      }}>
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={user.name}
        onChange={handleInputChange}
      />
      <label>lastname</label>
      <input
        type='text'
        name='lastname'
        value={user.lastname}
        onChange={handleInputChange}
      />
      <label>gender</label>
      <input
        type='text'
        name='gender'
        value={user.gender}
        onChange={handleInputChange}
      />
      <button>Add new family</button>
    </form>
  );
};

export default AddFamily;

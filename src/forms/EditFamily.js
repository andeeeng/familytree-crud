/** @format */

import React, { useState, useEffect } from 'react';

const EditFamily = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
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
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className='button muted-button'>
        Cancel
      </button>
    </form>
  );
};

export default EditFamily;

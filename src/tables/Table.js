/** @format */

import React from 'react';

const Table = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>lastname</th>
        <th>gender</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.gender}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className='button muted-button'>
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className='button muted-button'>
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No family</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default Table;

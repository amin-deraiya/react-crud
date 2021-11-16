import React, { useEffect, useState } from 'react';
import EditUser from './EditUser';
import ViewUser from './ViewUser';
import { useCallback } from 'react';
import AddNewUser from './AddNewUser';
import usersList from './data.json'

export default function UserList() {
  const [users, setUsers] = useState();
  const [viewUser, setViewUser] = useState();

  useEffect(() => {
    setUsers(usersList);
  }, []);

  const userView = (id) => {
    const user = users.filter((user) => {
      return user.id === id;
    });
    setViewUser(user[0]);
  };

  const editedUser = (id, username, phone, website, company) => {
    users.forEach((user) => {
      return (
        user.id === id &&
        ((user.username = username), (user.phone = phone), (user.website = website), (user.company = company))
      );
    });
    setUsers( arr => [...arr]);
  };

  const addUser = (username, phone, website, company) => {
    const newUser = {
      id: Math.random(),
      username: username,
      phone: phone,
      website: website,
      company: company,
    };
    users.push(newUser);
    setUsers( arr => [...arr]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  
  return (
    <div className='container my-3'>
      <h2>Users List</h2> <br />
      <div className='d-flex justify-content-end'>
        <button className='btn btn-primary ms-auto' data-bs-toggle='modal' data-bs-target='#addUser'>
          <i className='fas fa-user-plus'></i>
        </button>
        <br />
      </div>
      <br />
      <ul className='list-group list-group-flush'>
        {users?.map((user) => {
          return (
            <li key={user.id} className='list-group-item d-flex justify-content-between'>
              <div>
                <span>{user.username}</span>
                <br />
              </div>
              <div>
                <button
                  className='btn btn-primary'
                  data-bs-toggle='modal'
                  data-bs-target='#viewUser'
                  onClick={() => userView(user.id)}
                >
                  <i className="fal fa-eye"></i>
                </button>
                <button
                  className='btn btn-secondary mx-2'
                  data-bs-toggle='modal'
                  data-bs-target='#editUser'
                  onClick={() => userView(user.id)}
                >
                  <i className="fal fa-pencil-alt"></i>
                </button>
                <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>
                <i className="fal fa-trash-alt"></i>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <AddNewUser addUser={addUser} />
      <ViewUser user={viewUser} />
      <EditUser user={viewUser} editedUser={editedUser} />
    </div>
  );
}

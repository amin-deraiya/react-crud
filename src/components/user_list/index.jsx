import React, { useEffect, useState } from 'react';
import EditUser from './EditUser';
import ViewUser from './ViewUser';
import { useCallback } from 'react';
import AddNewUser from './AddNewUser';

const usersList = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: 'Romaguera-Crona',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: 'Deckow-Crist',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: 'Romaguera-Jacobson',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: 'Robel-Corkery',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: 'Keebler LLC',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: 'Considine-Lockman',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    phone: '210.067.6132',
    website: 'elvis.io',
    company: 'Johns Group',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: 'Abernathy Group',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: 'Yost and Sons',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: 'Hoeger LLC',
  },
];
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

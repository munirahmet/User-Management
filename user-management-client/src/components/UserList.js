import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api';
import UserItem from './UserItem';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <UserItem key={user.id} user={user} onEdit={onEdit} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;

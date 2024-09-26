import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import ChatBox from './components/ChatBox';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleUserSaved = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <ChatBox />
      <div className="container">
        <h1>User Management</h1>
        <UserForm selectedUser={selectedUser} onUserSaved={handleUserSaved} />
        <UserList onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default App;

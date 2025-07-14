import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>User Directory</h1>
      <input
        type="text"
        placeholder="Search by name or email..."
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="user-grid">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        {filteredUsers.length === 0 && <p>No users found.</p>}
      </div>
    </div>
  );
};

export default App;

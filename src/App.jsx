import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://my-backend-dzky.onrender.com/users');
        setUsers(response.data);
      } catch (error) {
        setError('Failed to fetch users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="app-container">
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Users List - MyFunding</title>
        <meta name="description" content="View the list of users on the MyFunding platform. Discover business funding solutions." />
        <meta name="keywords" content="users, myfunding, business funding, startup funding, platform users" />
        <meta property="og:title" content="Users List - MyFunding" />
        <meta property="og:description" content="Browse through the list of users on MyFunding." />
      </Helmet>

      <h1>Users List</h1>
      <h2>WELCOME !!!!!!</h2>

      {loading && <p className="loading">Loading...</p>}
      {error && !loading && <p className="error-message">{error}</p>}
      {!loading && !error && users.length === 0 && <p className="no-data">No users found.</p>}
      {!loading && !error && users.length > 0 && (
        <ul className="user-list">
          {users.map(user => (
            <li key={user.id} className="user-item">
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

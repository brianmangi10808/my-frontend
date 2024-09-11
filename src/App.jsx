import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://my-backend-dzky.onrender.com/users');
        setUsers(response.data); // Set the user data
      } catch (error) {
        setError(error);
        console.error('There was an error fetching the users!', error);
      } finally {
        setLoading(false); // Data has been fetched or an error occurred
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {loading && <p>Loading...</p>} {/* Show loading indicator */}
      {error && !loading && <p>{error.message}</p>} {/* Show error message if not loading */}
      {!loading && !error && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

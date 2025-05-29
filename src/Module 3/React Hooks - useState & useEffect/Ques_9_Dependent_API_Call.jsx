// Dependent API Calls with useEffect
// Description: Create a component that displays a list of users. When a user is clicked, fetch and display their posts.

// Steps to needed:
//     - First useEffect : Fetches the user list.
//     - Second useEffect([selectedUserId]) : Fetches posts when a user is selected.
//     - Write your code within the file, by the name of component as Dependent_API_Call
import React, { useState, useEffect } from 'react';

function Dependent_API_Call() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState('');

  // Fetch users when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoadingUsers(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchUsers();
  }, []);

  // Fetch posts when selectedUserId changes
  useEffect(() => {
    if (!selectedUserId) return;

    const fetchPosts = async () => {
      try {
        setLoadingPosts(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`);
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingPosts(false);
      }
    };

    fetchPosts();
  }, [selectedUserId]);

  return (
    <div>
      <h2>Users</h2>
      {loadingUsers ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <button onClick={() => setSelectedUserId(user.id)}>
                {user.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedUserId && (
        <div>
          <h3>Posts by User {selectedUserId}</h3>
          {loadingPosts ? (
            <p>Loading posts...</p>
          ) : (
            <ul>
              {posts.map(post => (
                <li key={post.id}>
                  <strong>{post.title}</strong>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
}

export default Dependent_API_Call;

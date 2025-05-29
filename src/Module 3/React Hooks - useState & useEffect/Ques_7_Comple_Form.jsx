// Form with Multiple Input Fields
// Description: Create a form for user registration with fields for username, email, and password. Display the entered data under the form.
// Steps:
//     - Write your code within the file, by the name of component as Complex_Form

import React, { useState } from 'react';

function Complex_Form() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);
    // Optionally clear the form
    // setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div>
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default Complex_Form;

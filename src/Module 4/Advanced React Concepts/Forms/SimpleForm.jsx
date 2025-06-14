// SimpleForm.jsx
import React, { useState } from 'react';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset error while typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'username' && value.trim() === '') {
      error = 'Username is required';
    }

    if (name === 'email' && !value.includes('@')) {
      error = 'Email must include "@" symbol';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Simple Controlled Form</h2>

      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <hr />
      <div>
        <p><strong>Entered Username:</strong> {formData.username}</p>
        <p><strong>Entered Email:</strong> {formData.email}</p>
      </div>
    </div>
  );
};

export default SimpleForm;

// SimpleForm.jsx
import React, { useState } from 'react';

// ✅ Simple controlled form component
const SimpleForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [errors, setErrors] = useState({ username: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'username' && !value.trim()) {
      error = 'Username is required';
    }

    if (name === 'email') {
      if (!value.trim()) error = 'Email is required';
      else if (!/^\S+@\S+\.\S+$/.test(value)) error = 'Invalid email format';
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <div>
      <h2>Simple Controlled Form</h2>

      <div>
        <label htmlFor="username">Username:</label><br />
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label><br />
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <hr />
      <p><strong>Entered Username:</strong> {formData.username}</p>
      <p><strong>Entered Email:</strong> {formData.email}</p>
    </div>
  );
};

export default SimpleForm;

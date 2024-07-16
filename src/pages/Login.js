// ./pages/Login.js

import React from 'react';

const Login = () => {
  const handleLogin = () => {
    // Handle login logic
    console.log('Logged in');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const isUserLoggedIn = Cookies.get('loggedIn') === 'true';

    if (isUserLoggedIn) {
      alert('You are already logged in.');
      return;
    }
    Cookies.set('loggedIn', 'true', { expires: 1 }); 
    Cookies.set('username', username, { expires: 1 });
    Cookies.set('password', password, { expires: 1 });

    onLogin();
  };

  return (
    <div className='inner-block'>
      <h1>Welcome!</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button id="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
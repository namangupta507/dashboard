import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route,Routes, Navigate  } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = Cookies.get('loggedIn') === 'true';
    setLoggedIn(isUserLoggedIn);
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    Cookies.set('loggedIn', 'true', { expires: 1 });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    Cookies.remove('loggedIn');
  };

  return (
    <div className='main'>
      <Router>
        <Routes>
        <Route
          path=""
          element={loggedIn ? <Navigate to="/logout" /> : <Navigate to="/login" />}
        />
      <Route
        exact
        path="login"
        element={loggedIn ? <Navigate to="/logout" /> : <Login onLogin={handleLogin} />}
      />
      <Route
        exact
        path="logout"
        element={loggedIn ? <Logout onLogout={handleLogout} /> : <Navigate to="/login" />}
      />
      </Routes>
    </Router>
    </div>
  );
};

export default App;

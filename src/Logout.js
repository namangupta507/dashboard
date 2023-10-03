import React from 'react';
import Cookies from 'js-cookie';
import "./Logout.css";

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    Cookies.remove('loggedIn');
    onLogout();
  };

  return (
    <div className="inner-block2">
      <h2>Welcome to the Dashboard</h2>
      <button id="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
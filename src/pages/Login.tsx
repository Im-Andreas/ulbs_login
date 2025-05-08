import React from 'react';
import { useNavigate } from 'react-router';

import './styles/Login.css';
import logo from '../assets/logo-ulbs.png';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: your real auth logic here...
    navigate('/home');
  };

  return (
    <div className="login-viewport">
        <div className="login-container">
            <div className="login-card">
                <img
                src={logo}
                alt="Universitatea Lucian Blaga din Sibiu"
                className="login-logo"
                />
                <button
                className="login-button"
                onClick={handleLogin}
                >
                Conectează-te
                </button>
            </div>
        </div>
    </div>
  );
};

export default Login;

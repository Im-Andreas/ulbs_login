import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router';
import Login from './pages/Login';
import Home from './pages/Home';

const App: React.FC = () => {
  // TODO: replace this with your real auth flag (e.g. from context)
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            isAuthenticated
              ? <Home />
              : <Navigate to="/login" replace />
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

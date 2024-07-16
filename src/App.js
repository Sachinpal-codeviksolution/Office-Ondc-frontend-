import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import PrivateRoute from './routes/PrivateRoute';
// import PublicRoute from './routes/PublicRoute';isAuthenticated
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './index.css';
import { useAuth } from './store/AuthContext'; // Assuming you have an AuthContext for authentication
import Button from './components/common/Button';

function App() {
  const { isAuthenticated } = useAuth(); // Replace with your actual authentication context

  return (
    <Router>
      <div className="App">
        <Button />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {!isAuthenticated ? (
            <Route path="/login" element={<Login />} />
          ) : (
            <Route path="/dashboard" element={<Dashboard />} />
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

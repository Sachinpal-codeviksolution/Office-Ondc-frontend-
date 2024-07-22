import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useAuth } from './store/AuthContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Order from './pages/Order';
import Settings from './pages/Settings';
import Complaints from './pages/Complaints';
import PinMessages from './pages/PinMessages';
import Product from './pages/Product';
import Category from './pages/Category';
import Brands from './pages/Brands';
import CancelOrder from './pages/CancelOrder';
import ReturnOrder from './pages/ReturnOrder';
import Register from './pages/Register';
import BarChart from './components/Chart/BarChart';
import Inventroy  from './pages/Inventroy';
function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          {isAuthenticated ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/inventory" element={<Inventroy />} />
              <Route path="/order" element={<Order />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/pin-message" element={<PinMessages />} />
              <Route path="/product" element={<Product />} />
              <Route path="/category" element={<Category />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/cancel-order" element={<CancelOrder />} />
              <Route path="/return-order" element={<ReturnOrder />} />
              <Route path="/register" element={<Register />} />
              <Route path="/barchart" element={<BarChart />} />
            </>
          ) : (
          
            <Route path="*" element={<Link to="/" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

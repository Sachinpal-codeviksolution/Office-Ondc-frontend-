// ./pages/Dashboard.js

import React from 'react';
import { useAuth } from '../store/AuthContext';
// Assuming you have an AuthContext for authentication

const Dashboard = () => {
    const { logout } = useAuth(); // Example usage of useAuth hook

    const handleLogout = () => {
        // Handle logout logic
        logout();
        console.log('Logged out');
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to your dashboard!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;

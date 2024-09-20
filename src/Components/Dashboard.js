import React from 'react';
import useUserData from '../Hooks/useUserData';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { user: users, loading, error } = useUserData();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div className="dashboard">
        {users.map(user => (
          <Link to={`/users/${user.id}`} key={user.id} className="user-card">
            <div className="user-card-image"></div>
            <div className="user-card-icon">
                <i className="bi bi-person-circle"></i>
            </div>
            <p>{user.name}</p>
          </Link>
        ))}
      </div>
  );
};

export default Dashboard;


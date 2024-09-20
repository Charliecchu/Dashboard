import React from 'react';
import './UserActivities.css';

const UserActivities = ({ activities }) => {
  if (!activities || activities.length === 0) return <p>No activities available.</p>;

  return (
    <div className="user-activities">
      <h2>User Activities</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            <h3>{activity.title}</h3>
            <p>{activity.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;



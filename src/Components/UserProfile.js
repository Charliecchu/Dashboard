// import React from "react";

// const UserProfile = ({ user }) => {
//     if (!user) return null;

//     return (
//         <div className="user-profile">
//             <h2>User Profile</h2>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Phone:</strong> {user.phone}</p>
//             <p></p>
//         </div>
//     );
// }

// export default UserProfile;
import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="user-profile">
      <h2>{user.name} (Username: {user.username})</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
};

export default UserProfile;
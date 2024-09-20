import React from "react";
import { useParams } from "react-router-dom";
import useUserData from '../Hooks/useUserData';
import UserProfile from "./UserProfile";
import UserActivities from "./UserActivities";
import "./UserDetail.css";

const UserDetail = () => {
const { userId } = useParams();
  const { user, activities, loading, error } = useUserData(userId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-detail">
      <UserProfile user={user} />
      <UserActivities activities={activities} />
    </div>
  );
}

export default UserDetail;
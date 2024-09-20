import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserData = (userId) => {
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);

        if (userId) {
          const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
          setUser(userResponse.data);

          const activitiesResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: { userId },
          });
          setActivities(activitiesResponse.data);
        } else {
          const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
          setUser(usersResponse.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  return { user, activities, loading, error };
};

export default useUserData;
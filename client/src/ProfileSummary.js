import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileSummary = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const googleId = localStorage.getItem('googleId'); // Retrieve googleId from local storage

      if (!googleId) {
        console.error('No googleId found in local storage');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/users/${googleId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <h1>{userData.name}</h1>
      <img src={userData.picture} alt={userData.name} />
      <p>Email: {userData.email}</p>
      <p>Birthdate: {userData.birthdate}</p>
      <p>Gender: {userData.gender}</p>
      <p>Interests: {userData.interests.join(', ')}</p>
      <p>Crush: {userData.crush}</p>
    </div>
  );
};

export default ProfileSummary;
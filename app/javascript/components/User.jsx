import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  // passing an empty array as last arg ensures loadUser is only called the first time the component loads
  useEffect(() => { loadUser(); }, []);

  const loadUser = () => {
    const url = `/api/v1/users/${id}`;
    axios.get(url)
      .then((response) => {
        const user = response.data;
        const currentUser = {
          key: user.id,
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          createdAt: user.created_at
        };
        setUser(currentUser);
      })
      .catch((err) => console.log('Error: ' + err));
  };

  return (
    <>
      <h3>{user.firstName} {user.lastName}</h3>

      <p>
        <strong>Email: </strong>
        {user.email}
      </p>

      <p>
        <strong>Friendship Concierge initiaion date: </strong>
        {user.createdAt}
      </p>
    </>
  );
};

export default User;

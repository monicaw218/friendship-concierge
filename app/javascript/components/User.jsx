import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
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
      <div>Now showing user {id}</div>

      <div>First Name: {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
      <div>Email: {user.email}</div>

      <div>Friendship Concierge initiaion date: {user.createdAt}</div>
    </>
  );
};

export default Users;

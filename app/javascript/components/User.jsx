import { Table, message, Popconfirm, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Users = () => {
  const [user, setUser] = useState({});
	let { id } = useParams();

  // passing an empty array as last arg ensures loadUser is only called the first time the component loads
  useEffect(() => { loadUser(); }, []);

	const APIURL = 'http://localhost:3000';

  const loadUser = () => {
    const url = `${APIURL}/api/v1/users/${id}`;
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error('Network error.');
      })
      .then((data) => {
      	const user = data;
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
      .catch((err) => message.error('Error: ' + err));
  };

  // could be used after password update
  const reloadUser = () => {
    setUser([]);
    loadUser();
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

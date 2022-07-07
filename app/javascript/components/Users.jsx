import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  // passing an empty array as last arg ensures loadUsers is only called the first time the component loads
  useEffect(() => { loadUsers(); }, []);

  const displayPopover = userId => {
    return (
      <Popover id='popover-basic'>
        <Popover.Header>
          You sure you want to delete this user?
        </Popover.Header>
        <Popover.Body>
          <input type='submit' style={{ width: 'auto' }} value='Yes' className='btn btn-primary' onClick={e => deleteUser(userId, e)} />
        </Popover.Body>
      </Popover>
    );
  };

  const loadUsers = () => {
    const url = '/api/v1/users';
    axios.get(url)
      .then((response) => {
        const users = response.data;
        users.forEach((user) => {
          const jsonifiedUser = {
            key: user.id,
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          };

          setUsers(users => [...users, jsonifiedUser]);
        });
      })
      .catch((err) => console.error('Error: ' + err.response.data.errors));
  };

  const reloadUsers = () => {
    setUsers([]);
    loadUsers();
  };

  const deleteUser = (id, event) => {
    event.preventDefault();
    const url = `api/v1/users/${id}`;

    fetch(url, {
      method: 'delete'
    })
      .then((data) => {
        if (data.ok) {
          reloadUsers();
          return data.json();
        }
        throw new Error('Network error.');
      })
      .catch((err) => console.log('Error: ' + err.response.data.errors));
  };

  const onSubmitCreateNew = event => {
    event.preventDefault();
    window.location.replace('/signup');
  };

  return (
    <>
      <h1>Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td><a href={`users/${user.id}`}>{user.id}</a></td>
                <td><a href={`users/${user.id}`}>{user.first_name}</a></td>
                <td><a href={`users/${user.id}`}>{user.last_name}</a></td>
                <td><a href={`users/${user.id}`}>{user.email}</a></td>
                <td>
                  <OverlayTrigger trigger='click' placement='right' overlay={displayPopover(user.id)}>
                    <Button variant='danger'>X</Button>
                  </OverlayTrigger>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <input type='submit' style={{ marginTop: '16px', width: 'auto' }} value='Create New +' className='btn btn-primary' onClick={onSubmitCreateNew} />
    </>
  );
};

export default Users;

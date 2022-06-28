import { Table, message, Popconfirm, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  // passing an empty array as last arg ensures loadUsers is only called the first time the component loads
  useEffect(() => { loadUsers(); }, []);

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name'
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: '',
      key: 'action',
      render: (_text, record) => (
        <Popconfirm title='Are you sure to delete this user?' onConfirm={() => deleteUser(record.id)} okText='Yes' cancelText='No'>
          <a href='#' type='danger'>
            Delete{' '}
          </a>
        </Popconfirm>
      )
    }
  ];

  const loadUsers = () => {
    const url = '/api/v1/users';
    axios.get(url)
      .then((response) => {
        const users = response.data;
        users.forEach((user) => {
          const newUser = {
            key: user.id,
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          };

          setUsers(users => [...users, newUser]);
        });
      })
      .catch((err) => message.error('Error: ' + err));
  };

  const reloadUsers = () => {
    setUsers([]);
    loadUsers();
  };

  const deleteUser = (id) => {
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
      .catch((err) => message.error('Error: ' + err));
  };

  return (
    <>
      <Table className='table-striped-rows' dataSource={users} columns={columns} pagination={{ pageSize: 5 }} />
      <Button type='primary' style={{ marginTop: '16px' }}>
        <a href='/signup' style={{ textDecoration: 'none' }}>Create New +</a>
      </Button>
    </>
  );
};

export default Users;

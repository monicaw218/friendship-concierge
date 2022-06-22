import { Table, message, Popconfirm } from 'antd';
import React, { useState, useEffect } from 'react';
import AddFriendModal from './AddFriendModal';

const Friends = () => {
  const [friends, setFriends] = useState([]);

  // passing an empty array as last arg ensures loadFriends is only called the first time the component loads
  useEffect(() => { loadFriends(); }, []);

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
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Interests',
      dataIndex: 'interests',
      key: 'interests'
    },
    {
      title: '',
      key: 'action',
      render: (_text, record) => (
        <Popconfirm title='Are you sure to delete this friend?' onConfirm={() => deleteFriend(record.id)} okText='Yes' cancelText='No'>
          <a href='#' type='danger'>
            Delete{' '}
          </a>
        </Popconfirm>
      )
    }
  ];

  const loadFriends = () => {
    const url = 'api/v1/friends/index';
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error('Network error.');
      })
      .then((data) => {
        data.forEach((friend) => {
          const newFriend = {
            key: friend.id,
            id: friend.id,
            first_name: friend.first_name,
            last_name: friend.last_name,
            age: friend.age,
            interests: friend.interests
          };

          setFriends(friends => [...friends, newFriend]);
        });
      })
      .catch((err) => message.error('Error: ' + err));
  };

  const reloadFriends = () => {
    setFriends([]);
    loadFriends();
  };

  const deleteFriend = (id) => {
    const url = `api/v1/friends/${id}`;

    fetch(url, {
      method: 'delete'
    })
      .then((data) => {
        if (data.ok) {
          reloadFriends();
          return data.json();
        }
        throw new Error('Network error.');
      })
      .catch((err) => message.error('Error: ' + err));
  };

  return (
    <>
      <Table className='table-striped-rows' dataSource={friends} columns={columns} pagination={{ pageSize: 5 }} />

      <AddFriendModal reloadFriends={reloadFriends} />
    </>
  );
};

export default Friends;

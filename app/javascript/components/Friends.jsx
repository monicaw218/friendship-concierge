import { message } from 'antd';
import React, { useState, useEffect } from 'react';
import AddFriendModal from './AddFriendModal';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Friends = () => {
  const [friends, setFriends] = useState([]);

  // passing an empty array as last arg ensures loadFriends is only called the first time the component loads
  useEffect(() => { loadFriends(); }, []);

  const displayPopover = id => {
    return (
      <Popover id='popover-basic'>
        <Popover.Header>
          You sure you want to delete this friend?
        </Popover.Header>
        <Popover.Body>
          <input type='submit' style={{ width: 'auto' }} value='Yes' className='btn btn-primary' onClick={e => deleteFriend(id, e)} />
        </Popover.Body>
      </Popover>
    );
  };

  const loadFriends = () => {
    const url = '/api/v1/friends';
    axios.get(url)
      .then((response) => {
        const friends = response.data;
        friends.forEach((friend) => {
          const newFriend = {
            key: friend.id,
            id: friend.id,
            first_name: friend.first_name,
            last_name: friend.last_name,
            age: friend.age,
            interests: friend.interests
          };

          setFriends(friends => [newFriend, ...friends]);
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
      <h1>Friends Catalog</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Interests</th>
            <th>Delete Friend</th>
          </tr>
        </thead>
        <tbody>
          {friends.map((friend, i) => {
            return (
              <tr key={i}>
                <td><a href={`friends/${friend.id}`}>{friend.id}</a></td>
                <td><a href={`friends/${friend.id}`}>{friend.first_name}</a></td>
                <td><a href={`friends/${friend.id}`}>{friend.last_name}</a></td>
                <td><a href={`friends/${friend.id}`}>{friend.age}</a></td>
                <td><a href={`friends/${friend.id}`}>{friend.interests}</a></td>
                <td>
                  <OverlayTrigger trigger='click' placement='right' overlay={displayPopover(friend.id)}>
                    <Button variant='danger'>X</Button>
                  </OverlayTrigger>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AddFriendModal reloadFriends={reloadFriends} />
    </>
  );
};

export default Friends;

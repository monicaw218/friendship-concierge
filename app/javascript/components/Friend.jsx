import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import AddFriendHistoryModal from './AddFriendHistoryModal';
import EditFriendModal from './EditFriendModal';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [friendHistories, setFriendHistories] = useState([]);
  const { id } = useParams();

  // passing an empty array as last arg ensures loadFriend is only called the first time the component loads
  useEffect(() => { loadFriend(); }, []);

  const loadFriend = () => {
    const url = `/api/v1/friends/${id}`;
    axios.get(url)
      .then((response) => {
        const friendInfo = response.data;
        const friend = friendInfo.friend;
        const jsonifiedFriend = {
          key: friend.id,
          id: friend.id,
          firstName: friend.first_name,
          lastName: friend.last_name,
          interests: friend.interests,
          createdAt: friend.created_at,
          birthday: friend.birthday
        };
        setFriend(jsonifiedFriend);

        setFriendHistories([]);
        const feed = friendInfo.feed;
        feed.forEach((friendHistory) => {
          const newFriendHistory = {
            key: friendHistory.id,
            id: friendHistory.id,
            date: friendHistory.alternate_update_time || friendHistory.created_at,
            description: friendHistory.description
          };

          setFriendHistories(friendHistories => [...friendHistories, newFriendHistory]);
        });
      })
      .catch((err) => console.log('Error: ' + err.response.data.errors));
  };

  const displayPopover = id => {
    return (
      <Popover id='popover-basic'>
        <Popover.Header>
          You sure you want to delete this friend update?
        </Popover.Header>
        <Popover.Body>
          <input type='submit' style={{ width: 'auto' }} value='Yes' className='btn btn-primary' onClick={e => deleteFriendUpdate(id, e)} />
        </Popover.Body>
      </Popover>
    );
  };

  const deleteFriendUpdate = (id, event) => {
    event.preventDefault();
    const url = `/friend_histories/${id}`;

    axios.delete(url)
      .then(() => {
        reloadFriendHistories();
      })
      .catch((err) => console.log('Error: ' + err.response.data.errors));
  };

  const reloadFriendHistories = () => {
    setFriendHistories([]);
    loadFriend();
  };

  const friendAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return birthday ? age : null;
  };

  return (
    <>
      <h3>{friend.firstName} {friend.lastName}</h3>

      <p>
        <strong>Nickname: </strong>
        {friend.nickname || 'N/A'}
      </p>

      <p>
        <strong>Age: </strong>
        {friendAge(friend.birthday)}
      </p>

      <p>
        <strong>Created At: </strong>
        {friend.createdAt}
      </p>

      <p>
        <strong>Interests: </strong>
        {friend.interests}
      </p>

      <p>
        <strong>Birthday: </strong>
        {friend.birthday}
      </p>


      { friend.firstName ? <EditFriendModal
        id={id}
        loadFriend={loadFriend}
        originalFirstName={friend.firstName}
        originalLastName={friend.lastName}
        originalInterests={friend.interests}
        originalBirthday={friend.birthday.replaceAll('-', '/')}
      /> : null }

      <hr className='my-4' />

      <h4>Updates</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Delete Update</th>
          </tr>
        </thead>
        <tbody>
          {friendHistories.map((friendHistory, i) => {
            return (
              <tr key={i}>
                <td>{friendHistory.date}</td>
                <td>{friendHistory.description}</td>
                <td>
                  <OverlayTrigger trigger='click' placement='right' overlay={displayPopover(friendHistory.id)}>
                    <Button variant='danger'>X</Button>
                  </OverlayTrigger>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <AddFriendHistoryModal id={id} />
    </>
  );
};

export default Friend;

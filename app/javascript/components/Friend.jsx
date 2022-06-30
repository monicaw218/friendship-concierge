import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Friend = () => {
  const [friend, setFriend] = useState({});
  const { id } = useParams();

  // passing an empty array as last arg ensures loadFriend is only called the first time the component loads
  useEffect(() => { loadFriend(); }, []);

  const loadFriend = () => {
    const url = `/api/v1/friends/${id}`;
    axios.get(url)
      .then((response) => {
        const friend = response.data;
        const jsonifiedFriend = {
          key: friend.id,
          id: friend.id,
          firstName: friend.first_name,
          lastName: friend.last_name,
          age: friend.age,
          interests: friend.interests,
          createdAt: friend.created_at
        };
        setFriend(jsonifiedFriend);
      })
      .catch((err) => console.log('Error: ' + err));
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
        {friend.age}
      </p>

      <p>
        <strong>Created At: </strong>
        {friend.createdAt}
      </p>

      <p>
        <strong>Interests: </strong>
        {friend.interests}
      </p>
    </>
  );
};

export default Friend;

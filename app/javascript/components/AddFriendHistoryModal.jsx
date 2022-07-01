import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const AddFriendHistoryModal = () => {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [friends, setFriends] = useState([]);
  const [friendId, setFriendId] = useState(0);
  const [dropdownTitle, setDropdownTitle] = useState('Pick a Friend');

  const formRef = useRef();
  useEffect(() => { loadFriends(); }, []);

  const onFinish = (e) => {
    e.preventDefault();
    const body = {
      friend_history: {
        friend_id: friendId,
        alternate_update_time: null,
        description: description
      }
    };

    const url = '/friend_histories';
    axios.post(url, body)
      .then(response => {
        handleCancel();
        window.location.replace(`/friends/${friendId}`);
      })
      .catch((err) => { console.error('Error: ' + err.response.data.errors); handleCancel(); });
  };

  const loadFriends = () => {
    const url = '/api/v1/friends';
    axios.get(url)
      .then((response) => {
        const friends = response.data;
        friends.forEach((friend) => {
          const newFriend = {
            id: friend.id,
            name: friend.first_name + ' ' + friend.last_name
          };

          setFriends(friends => [newFriend, ...friends]);
        });
      })
      .catch((err) => console.error('Error: ' + err));
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const selectDropdownItem = event => {
    setFriendId(event);
    const selectedFriend = friends.find(o => String(o.id) === event);
    setDropdownTitle(selectedFriend.name);
  };

  const displayButton = friends.length > 0;

  return (
    <>
    { displayButton ? 
      <Button type='primary' onClick={showModal}>Add a Friend Update</Button> : null
    }

      <Modal show={visible} onHide={handleCancel} backdrop='static' animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Got An Update on Your Friend?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='name'>Name</Form.Label>

              <Dropdown onSelect={e => { selectDropdownItem(e); }}>
                <Dropdown.Toggle id='dropdown-basic'>
                  {dropdownTitle}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {friends.map((friend, i) => {
                    return (
                      <Dropdown.Item
                        key={friend.id}
                        eventKey={friend.id}
                      >{friend.name}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>

            </Form.Group>

            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='description'>Enter an update about your friend.</Form.Label>
              <Form.Control as='textarea' rows={5} onChange={e => setDescription(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCancel}>
            Close
          </Button>
          <Button variant='primary' onClick={e => onFinish(e)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddFriendHistoryModal;

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const EditFriendModal = ({
  loadFriend,
  id,
  originalFirstName,
  originalLastName,
  originalInterests,
  originalBirthday
}) => {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState(originalFirstName);
  const [lastName, setLastName] = useState(originalLastName);
  const [interests, setInterests] = useState(originalInterests);
  const [birthday, setBirthday] = useState(new Date(originalBirthday));

  const formRef = useRef();

  const onFinish = (e) => {
    e.preventDefault();
    const body = { friend: { first_name: firstName, last_name: lastName, interests: interests, birthday: birthday } };

    const url = `/api/v1/friends/${id}`;
    axios.put(url, body)
      .then(response => {
        handleCancel();
        loadFriend();
      })
      .catch((err) => console.error('Error: ' + err.response.data.errors));
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Edit Friend
      </Button>

      <Modal show={visible} onHide={handleCancel} backdrop='static' animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='first_name'>First Name</Form.Label>
              <Form.Control defaultValue={firstName} onChange={e => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='last_name'>Last Name</Form.Label>
              <Form.Control defaultValue={lastName} onChange={e => setLastName(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='interests'>Interests</Form.Label>
              <Form.Control defaultValue={interests} as='textarea' rows={2} onChange={e => setInterests(e.target.value)} />
            </Form.Group>
          </Form>

          <Form.Group className='mb-3' controlId={formRef}>
            <Form.Label name='birthday'>Birthday</Form.Label>
            <DatePicker selected={birthday} onChange={e => setBirthday(e)} />
          </Form.Group>

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

export default EditFriendModal;

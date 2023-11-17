import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const AddFriendModal = ({ reloadFriends }) => {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [age, setAge] = useState(null);
  const [interests, setInterests] = useState(null);
  const [birthday, setBirthday] = useState(null);

  const formRef = useRef();

  const resetStates = () => {
    setFirstName(null);
    setLastName(null);
    setAge(null);
    setInterests(null);
  };

  const onFinish = (e) => {
    e.preventDefault();
    const body = { friend: { first_name: firstName, last_name: lastName, age: age, interests: interests, birthday: birthday } };

    const url = '/api/v1/friends';
    axios.post(url, body)
      .then(response => {
        handleCancel();
        reloadFriends();
        resetStates();
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
        Create New +
      </Button>

      <Modal show={visible} onHide={handleCancel} backdrop='static' animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Make a Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='first_name'>First Name</Form.Label>
              <Form.Control placeholder="Input your friend's first name" onChange={e => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='last_name'>Last Name</Form.Label>
              <Form.Control placeholder="Input your friend's last name" onChange={e => setLastName(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='age'>Age</Form.Label>
              <Form.Control placeholder="Input your friend's age" onChange={e => setAge(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='interests'>Interests</Form.Label>
              <Form.Control as='textarea' rows={2} onChange={e => setInterests(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='birthday'>Birthday</Form.Label>
              <DatePicker selected={birthday} onChange={e => setBirthday(e)} />
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

export default AddFriendModal;

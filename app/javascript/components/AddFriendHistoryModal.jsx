import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useRef } from 'react';
import axios from 'axios';

const AddFriendHistoryModal = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [altUpdateTime, setAltUpdateTime] = useState('');
  const [description, setDescription] = useState('');

  const formRef = useRef();

  const onFinish = (e) => {
    e.preventDefault();
    const body = {
      friendHistory: {
        friend_id: friendId,
        alternate_update_time: altUpdateTime,
        description: description
      }
    };

    const url = '/api/v1/friendHistories';
    axios.post(url, body)
      .then(response => {
        handleCancel();
      })
      .catch((err) => console.error('Error: ' + err));
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
        Add a Friend Update
      </Button>

      <Modal show={visible} onHide={handleCancel} backdrop='static' animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Got An Update on Your Friend?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='friend'>Name</Form.Label>
              <Form.Control placeholder="Input your friend's name" onChange={e => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className='mb-3' controlId={formRef}>
              <Form.Label name='date'>Alternate Date</Form.Label>
              <Form.Control placeholder='(Optional)' onChange={e => setAltUpdateTime(e.target.value)} />
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

import { Button, Form, Input, Modal } from 'antd';
import React, { useState, useRef } from 'react';

const AddFriendModal = ({ reloadFriends }) => {
  const [visible, setVisible] = useState(false);
  const formRef = useRef();

  const onFinish = (values) => {
    const url = 'api/v1/friends/create';
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((data) => {
        if (data.ok) {
          handleCancel();

          return data.json();
        }
        throw new Error('Network error.');
      })
      .then(() => {
        reloadFriends();
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
        Create New +
      </Button>

      <Modal title='Add New Friend' visible={visible} onCancel={handleCancel} footer={null}>
        <Form ref={formRef} layout='vertical' onFinish={onFinish}>
          <Form.Item name='first_name' label='First Name' rules={[{ required: true, message: "Please input your friend's first name!" }]}>
            <Input placeholder="Input your friend's first name" />
          </Form.Item>
          <Form.Item name='last_name' label='Last Name' rules={[{ required: true, message: "Please input your friend's last name!" }]}>
            <Input placeholder="Input your friend's last name" />
          </Form.Item>

          <Form.Item name='age' label='Age' rules={[{ required: true, message: "Please input your friend's age!" }]}>
            <Input type='number' placeholder="Input your friend's age" />
          </Form.Item>

          <Form.Item name='interests' label='Interests' rules={[{ required: true, message: "Please input your friend's interests!" }]}>
            <Input placeholder="Input your friend's interests" />
          </Form.Item>

          {/*            <Form.Item
              name="country"
              label="Country"
              rules={[
                {
                  required: true,
                  message: "Please input the country of the friend!",
                },
              ]}
            >
              <Select showSearch placeholder="Select your friend country" optionFilterProp="children" style={{ width: "100%" }}>
                <Option value="Finland">Finland</Option>
                <Option value="Germany">Germany</Option>
                <Option value="Netherlands">Netherlands</Option>
                <Option value="UK">UK</Option>
                <Option value="USA">USA</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item> */}
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddFriendModal;

import { Table, message, Popconfirm } from "antd";
import React from "react";
import AddFriendModal from "./AddFriendModal";

class Friends extends React.Component {
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Interests",
      dataIndex: "interests",
      key: "interests",
    },
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <Popconfirm title="Are you sure to delete this friend?" onConfirm={() => this.deleteFriend(record.id)} okText="Yes" cancelText="No">
          <a href="#" type="danger">
            Delete{" "}
          </a>
        </Popconfirm>
      ),
    },
  ];

  state = {
    friends: [],
  };

  componentDidMount() {
    this.loadFriends();
  }

  loadFriends = () => {
    const url = "api/v1/friends/index";
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then((data) => {
        data.forEach((friend) => {
          const newEl = {
            key: friend.id,
            id: friend.id,
            name: friend.name,
            age: friend.age,
            interests: friend.interests,
          };

          this.setState((prevState) => ({
            friends: [...prevState.friends, newEl],
          }));
        });
      })
      .catch((err) => message.error("Error: " + err));
  };

  reloadFriends = () => {
    this.setState({ friends: [] });
    this.loadFriends();
  };

  deleteFriend = (id) => {
    const url = `api/v1/friends/${id}`;

    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          this.reloadFriends();
          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => message.error("Error: " + err));
  };

  render() {
    return (
      <>
        <Table className="table-striped-rows" dataSource={this.state.friends} columns={this.columns} pagination={{ pageSize: 5 }} />
        
        <AddFriendModal reloadFriends={this.reloadFriends} />
      </>
    );
  }
}

export default Friends;

import React, { Component } from 'react';
import ListItem from './ListItem';
import './UserListStyle.css';
import dbData from './UsersDb';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbData.map((user) => ({ ...user, isSelected: false })),
    };
  }

  mapUser = (user) => {
    const selectUser = (user) => {
      const newUsers = [...this.state.users];
      const index = newUsers.indexOf(user);
      newUsers[index].isSelected = !newUsers[index].isSelected;
      this.setState({
        users: newUsers,
      });
    };
    return <ListItem key={user.id} user={user} onSelect={selectUser} />;
  };

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}
export default UserList;

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

  selectUser = (user) => {
    const newUsers = [...this.state.users];
    const index = newUsers.indexOf(user);
    newUsers[index].isSelected = !newUsers[index].isSelected;
    this.setState({
      users: newUsers,
    });
  };

  mapUser = (user, index) => {
    //const { users } = this.state;
    return <ListItem key={user.id} user={user} onSelect={this.selectUser} />;
  };

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}
export default UserList;

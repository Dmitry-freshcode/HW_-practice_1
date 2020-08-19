import React from 'react';

const ListItem = (props) => {
  const {
    user: { id, fName, lName, isSelected },
    onSelect,
  } = props;
  //console.log(id);

  const UserDate = () => {
    return (
      <span className={isSelected ? 'selected' : null}>
        <br />
        UserID: {id}
        <br />
        User Full Name: {fName} {lName};
      </span>
    );
  };

  return (
    <li>
      <UserDate />
      <label>
        <input type="checkbox" onChange={() => onSelect(props.user)} />
        Select
      </label>
    </li>
  );
};

export default ListItem;

import React from 'react';

const ListItem = (props) => {
  const {
    user: { id, fName, lName, isSelected },
    onSelect,
  } = props;

  const UserDate = () => {
    return (
      <span className={isSelected ? 'selected' : undefined}>
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
        <input type="checkbox" onChange={onSelect} />
        Select
      </label>
    </li>
  );
};

export default ListItem;

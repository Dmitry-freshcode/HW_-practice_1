import React from 'react';

const Greeting = (props) => {
  const { name, isHello } = props;

  return (
    <div>
      {isHello ? 'Hello' : 'Bye'} mr. {name}
    </div>
  );
};

export default Greeting;

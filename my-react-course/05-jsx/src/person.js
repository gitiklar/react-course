import React from 'react';

export default function Person(props) {
  const { name } = props;

  const style = {
    background: 'yellow',
    fontSize: '50px',
    borderRadius: '50px',
  }

  if(name.length > 3) {
    style.color = 'red';
  }

  return (
    <div style={style}>
      <h2>Hello {name}</h2>
    </div>
  );
}


import React from 'react';

function Header(props) {
  return (
    <header>
      <img src={props.image} alt="Blog Logo" />
      
      <h1>{props.name}</h1>
      
      <p>{props.about}</p>
    </header>
  );
}

export default Header;


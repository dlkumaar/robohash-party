import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img
        alt={props.monster.name}
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2 key={props.monster.id}>{props.monster.name}</h2>
      <p key={props.monster.email}>{props.monster.email}</p>
    </div>
  );
};

export default Card;

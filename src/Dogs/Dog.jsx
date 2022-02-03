import React from 'react';

export default function Dog({ dog }) {
  return (
    <div className='dog'>
      <p>Name: {dog.name}</p>
      <p>Number of legs: {dog.legs}</p>
      <p>Color(s): {dog.color}</p>
      <p>Favorite Toy: {dog.fav_toy}</p>
    </div>
  );
}

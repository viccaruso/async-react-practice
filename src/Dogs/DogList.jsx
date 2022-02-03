import React from 'react';
import Dog from './Dog.jsx';
import './Dogs.css';

export default function DogList({ arrOfDogs }) {
  return (
    <div className='dog-list'>
      {arrOfDogs.map((dog, i) => <Dog key={dog.name + i} dog={dog} />)}
    </div>
  );
}

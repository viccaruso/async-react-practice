import React from 'react';
import Motorcycle from './Motorcycle.jsx';
import './Motorcycles.css';

export default function MotorcyclesList({ arrOfMotorcycles }) {
  return (
    <div className='motorcycles-list'>
      {arrOfMotorcycles.map((motorcycle, i) => <Motorcycle key={motorcycle.model + i} motorcycle={motorcycle} />)}
    </div>
  );
}

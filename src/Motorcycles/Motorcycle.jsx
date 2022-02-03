import React from 'react';

export default function Motorcycle({ motorcycle }) {
  return (
    <div className='motorcycle'>
      <p>Brand: {motorcycle.make}</p>
      <p>Model: {motorcycle.model}</p>
      <p>Year: {motorcycle.year}</p>
      <p>Engine: {motorcycle.engine_cc}</p>
    </div>
  );
}

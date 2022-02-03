import './Presidents.css';
import React from 'react';
import President from './President';

export default function PresidentList({ arrOfPresidents }) {
  return (
    <div className='president-list'>
      {arrOfPresidents.map((president, i) => <President key={president.firstName + i} president={president} />)}
    </div>
  );
}

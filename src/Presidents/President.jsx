import React from 'react';

export default function President({ president }) {
  return (
    <div className='president'>
      <p>{`${president.firstName} ${president.lastName}`}</p>
      <p>{`${president.start_year} - ${president.end_year}`}</p>
      <p>Years in office: {president.total_years}</p>
    </div>
  );
}

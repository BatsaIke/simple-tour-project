import React from 'react';
import Tour from './Tour';
const Tours = ({tours, onDelete}) => {
 
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underling"></div>
      </div>
      <div>{tours.map((city) => {
        return <Tour key={city.id} {...city} onDelete={onDelete}/>;
      }
      )}</div>
    </section>
  );
};

export default Tours;

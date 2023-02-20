import React from 'react';

function Item({ title, item, winner }) {
  return (
    <>
      <h2 className="text-white mb-5 text-uppercase">{title}</h2>
      <img src={item.imgSrc} alt={item.type} />
    </>
  );
}

export default Item;

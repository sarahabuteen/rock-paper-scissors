import classNames from 'classnames';
import React from 'react';

function Item({ title, item, winner }) {
  return (
    <>
      <h2 className="text-white text-center mb-md-5 mb-3 text-uppercase">{title}</h2>
      <div className={classNames('mb-md-0 mb-5', winner ? 'card-shadow' : '')}>
        <img src={item.imgSrc} alt={item.type} />
      </div>
    </>
  );
}

export default Item;

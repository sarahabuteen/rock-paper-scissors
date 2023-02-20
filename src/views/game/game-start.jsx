import React from 'react';
import bg from '../../assets/images/game-bg.svg';
import data from '../../helpers/data';

function GameStart({ updatePickedItem }) {
  return (
    <div className="icons-wrapper">
      {data?.map((item) => {
        return (
          <img
            key={item.type}
            src={item.imgSrc}
            alt={item.type}
            className="icon"
            onClick={() => updatePickedItem(item)}
          />
        );
      })}
      <img src={bg} alt="background" className="bg" />
    </div>
  );
}

export default GameStart;

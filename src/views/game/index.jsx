import React, { useCallback, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GameStart from './game-start';
import GameResults from './game-results';

function Game() {
  const [pickedItem, setPickedItem] = useState(null);

  const updatePickedItem = useCallback((item) => {
    setPickedItem(item);
  }, [setPickedItem]);

  const playAgain = useCallback(() => {
    setPickedItem(null);
  }, [setPickedItem]);
  return (
    <>
      <Header />
      <main>
        {pickedItem
          ? <GameResults pickedItem={pickedItem} playAgain={playAgain} />
          : <GameStart updatePickedItem={updatePickedItem} />}
      </main>
      <Footer />
    </>
  );
}

export default Game;

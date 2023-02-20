import React, { useState, useEffect, useContext } from 'react';

import { Col, Container, Row } from 'reactstrap';
import Item from './item';
import Result from './result';
import data from '../../helpers/data';
import { GameContext } from '../../context';

function GameResults({ pickedItem, playAgain }) {
  const { dispatch } = useContext(GameContext);
  const [randomizedPick, setRandomizedPick] = useState(null);
  const [isResultVisible, toggleResult] = useState(false);
  const [result, setResult] = useState({
    message: '',
    won: false,
    lost: false,
  });

  useEffect(() => {
    if (!pickedItem?.beats || !randomizedPick?.type) return;

    if (pickedItem?.beats === randomizedPick?.type) {
      setResult({
        message: 'You win',
        won: true,
        lost: false,
      });
    } else if (randomizedPick?.beats === pickedItem?.type) {
      setResult({
        message: 'You lose',
        won: false,
        lost: true,
      });
    } else {
      setResult({
        message: 'It\'s a tie',
        won: false,
        lost: false,
      });
    }
  }, [pickedItem?.beats, randomizedPick?.type]);

  const randomizePick = () => {
    const index = Math.floor(Math.random() * data.length);
    setRandomizedPick(data[index]);
    setTimeout(() => toggleResult(true), 500);
  };

  useEffect(() => {
    setTimeout(randomizePick, 500);
  }, []);

  useEffect(() => {
    if (result?.won) {
      dispatch({ type: 'INCREMENT' });
    } else if (result?.lost) {
      dispatch({ type: 'DECREMENT' });
    }
  }, [isResultVisible]);
  return (
    <section className="result-wrapper">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={3} className="d-flex flex-column align-items-center justify-content-center">
            <Item title="You Picked" item={pickedItem} winner={result?.won && isResultVisible} />
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center justify-content-center">
            {isResultVisible
        && <Result resultMessage={result?.message} playAgain={playAgain} />}
          </Col>
          <Col md={3} className="d-flex flex-column align-items-center justify-content-center">
            {randomizedPick ? (
              <Item title="The House picked" item={randomizedPick} winner={result?.lost && isResultVisible} />
            ) : (
              <div className="loading" />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default GameResults;

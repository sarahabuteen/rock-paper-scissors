import React, { createContext, useReducer, useEffect } from 'react';

const GameContext = createContext();

const initialState = {
  score: Number(localStorage.getItem('score')) ?? 0,
};

function reducer(state, action) {
  switch (action.type) {
  case 'INCREMENT':
    return { ...state, score: state.score + 1 };
  case 'DECREMENT':
    return { ...state, score: state.score > 0 ? state.score - 1 : 0 };
  default:
    return state;
  }
}

function GameProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('score', state.score);
  }, [state.score]);

  return <GameContext.Provider value={{ state, dispatch }}>{props.children}</GameContext.Provider>;
}

export { GameContext, GameProvider };

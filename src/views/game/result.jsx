import React from 'react';

function Result({ resultMessage, playAgain }) {
  return (
    <>
      <h1 className="text-white mb-4 text-uppercase fw-bold">{resultMessage}</h1>
      <button
        type="button"
        className="btn btn-white text-uppercase px-4"
        onClick={playAgain}
      >
        Play again
      </button>
    </>
  );
}

export default Result;

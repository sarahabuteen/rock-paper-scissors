import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GameProvider } from './context';
import Game from './views/game';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Game />,
  },
]);

function App() {
  return (
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  );
}

export default App;

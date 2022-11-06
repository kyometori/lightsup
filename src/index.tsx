import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { LightsUp } from './classes/LightsUp'
import { Game } from './components/Game'

const game = new LightsUp()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Game.Provider value={game}>
      <App />
    </Game.Provider>
  </React.StrictMode>
);

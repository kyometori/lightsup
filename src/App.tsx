import { Board } from './components/Board'
import { useState, useRef } from 'react'
import { LightsUp } from './classes/LightsUp'

function App() {
  const { current: game } = useRef(new LightsUp())
  const [, setValue] = useState(true)
  
  const handleFlip = (x: number, y: number) => {
    game.flip(x, y)
    setValue(v => !v)
  }
  
  return (
    <>
      <h1>Lights Up!</h1>
      <Board board={game.board} flip={handleFlip} />
    </>
  );
}

export default App;

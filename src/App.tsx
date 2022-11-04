import { Board } from './components/Board'
import { useState } from 'react'
import { LightsUp } from './classes/LightsUp'

const game = new LightsUp()

function App() {
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

import { Board } from './components/Board'
import { Toolbar } from './components/Toolbar'
import { useState, useContext } from 'react'
import { Game } from './components/Game'

function App() {
  const game = useContext(Game)
  const [, setValue] = useState(true)
  
  const handleFlip = (x: number, y: number) => {
    game.flip(x, y)
    setValue(v => !v)
  }
  
  return (
    <>
      <h1>Lights Up!</h1>
      <Toolbar refresh={() => setValue(v => !v)} />
      <Board board={game.board} flip={handleFlip} />
    </>
  );
}

export default App;

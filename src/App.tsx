import { Board } from './components/Board'
import { Toolbar } from './components/Toolbar'
import { useState } from 'react'

function App() {
  const [, setValue] = useState(true)
  
  const refresh = () => setValue(v => !v)
  
  return (
    <>
      <h1 id="title">Lights Up!</h1>
      <div id="game">
        <Toolbar refresh={refresh} />
        <Board refresh={refresh} />
      </div>
    </>
  );
}

export default App;

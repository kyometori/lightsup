import { Board } from './components/Board'
import { Toolbar } from './components/Toolbar'
import { useState } from 'react'

function App() {
  const [, setValue] = useState(true)
  
  const refresh = () => setValue(v => !v)
  
  return (
    <>
      <h1>Lights Up!</h1>
      <Toolbar refresh={refresh} />
      <Board refresh={refresh} />
    </>
  );
}

export default App;

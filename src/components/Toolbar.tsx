import { useState, useContext } from 'react'
import { Game } from './Game'
import { MoveCounter } from './toolbars/MoveCounter'
import { RestartButton } from './toolbars/RestartButton'
import { ToggleHint } from './toolbars/ToggleHint'
import style from './Toolbar.module.css'

interface ToolbarProps {
  refresh: () => void
}

function Toolbar({ refresh }: ToolbarProps) {
  const game = useContext(Game)
  
  const [show, setShow] = useState(false)
  
  
  const restart = () => {
    game.renewGame()
    refresh()
  }
  
  const toggleHint = () => {
    setShow(s => !s)
    game.toggleHint()
    game.getHint()
    refresh()
  }
  
  return (
    <div id={style.toolbar}>
      <ToggleHint show={show} toggleHint={toggleHint} />
      <RestartButton restart={restart} />
      <MoveCounter count={game.moveCount} />
    </div>
  )
}

export { Toolbar }
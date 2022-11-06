import { useContext } from 'react'
import { Game } from './Game'
import { MoveCounter } from './toolbars/MoveCounter'
import { RestartButton } from './toolbars/RestartButton'
import style from './Toolbar.module.css'

interface ToolbarProps {
  refresh: () => void
}

function Toolbar({ refresh }: ToolbarProps) {
  const game = useContext(Game)
  
  const restart = () => {
    game.scramble()
    refresh()
  }
  
  return (
    <div id={style.toolbar}>
      <RestartButton restart={restart} />
      <MoveCounter count={game.moveCount} />
    </div>
  )
}

export { Toolbar }
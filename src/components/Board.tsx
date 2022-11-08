import { Bulb } from './Bulb' 
import { useContext } from 'react'
import { Game } from './Game'
import classnames from 'classnames'
import style from './Board.module.css'

interface BoardProps {
  refresh: () => void
}

interface WinCoverProps {
  show: boolean
  restart: () => void
}

function Board({ refresh }: BoardProps) {
  const game = useContext(Game)
  
  const flip = (x: number, y: number) => {
    game.flip(x, y)
    refresh()
  }
  
  const restart = () => {
    game.scramble()
    refresh()
  }
  
  return (
    <>
      <div id={style.board}>
        {game.board.flat().map((k, i) => (
          <Bulb 
            coordinate={[~~(i/5), i%5]}
            onClick={flip} 
            hint={i === game.hint}
            on={k} 
            key={i} 
          />
        ))}
        <WinCover show={game.win} restart={restart} />
      </div>
    </>
  )
}

function WinCover({ show, restart }: WinCoverProps) {
  return (
    <div 
      id={style['win-cover']} 
      className={classnames({ 
        [style.invisible]: !show,
        [style.fadeIn]: show
      })}>
      <h1>You Win!</h1>
      <div id={style.restart} onClick={restart}>
        Restart
      </div>
    </div>
  )
}

export { Board }
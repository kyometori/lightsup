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
  duration: number
  bps: number
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
        <WinCover 
          show={game.win} 
          restart={restart} 
          duration={game.duration}
          bps={game.moveCount / game.duration * 1000}
        />
      </div>
    </>
  )
}

function WinCover({ show, restart, duration, bps }: WinCoverProps) {
  return (
    <div 
      id={style['win-cover']} 
      className={classnames({ 
        [style.invisible]: !show,
        [style.fadeIn]: show
      })}>
      <h1>You Win!</h1>
      <h2>Time spent: {resolveTimeFormat(duration)} ({~~(bps * 100) / 100} bps)</h2>
      <div id={style.restart} onClick={restart}>
        Restart
      </div>
    </div>
  )
}

function resolveTimeFormat(time: number) {
  const millisecond = time % 1000
  time = ~~(time / 1000)
  const second = time % 60
  time = ~~(time / 60)
  const minute = time % 60
  time = ~~(time / 60)
  return `${minute}:${twoDigits(second)}.${millisecond}`
}

function twoDigits(a: number) { return a < 10 ? `0${a}` : `${a}` }

export { Board }
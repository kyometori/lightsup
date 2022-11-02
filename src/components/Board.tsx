import { Bulb } from './Bulb'
import style from './Board.module.css'


function Board() {
  const board = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]
  return (
    <>
      <div id={style.board}>
        {board.flat().map((k, i) => <Bulb key={i} />)}
      </div>
    </>
  )
}

export { Board }
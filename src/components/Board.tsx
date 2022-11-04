import { Bulb } from './Bulb'
import style from './Board.module.css'

interface BoardProps {
  board: boolean[][]
  flip: (x: number, y: number) => void
}

function Board({ board, flip }: BoardProps) {
  return (
    <>
      <div id={style.board}>
        {board.flat().map((k, i) => (
          <Bulb onClick={flip} x={~~(i/5)} y={i%5} on={k} key={i} />
        ))}
      </div>
    </>
  )
}

export { Board }
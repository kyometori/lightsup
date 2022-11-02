import { Bulb } from './Bulb'
import { useState } from 'react'
import style from './Board.module.css'


function Board() {
  const [board, setBoard] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ])
  
  const flip = (x: number, y: number) => {
    const tmp = Array.from(board)
    tmp[x][y] = !tmp[x][y]
    setBoard(tmp)
  }
  
  
  return (
    <>
      <div id={style.board}>
        {board.flat().map((k, i) => (
          <Bulb onClick={(x, y) => flip(x, y)} x={~~(i/5)} y={i%5} on={k} key={i} />
        ))}
      </div>
    </>
  )
}

export { Board }
import style from './Bulb.module.css'

interface BulbProps {
  on: boolean
  x: number
  y: number
  onClick: (x: number, y: number) => void
}

function Bulb({ on, x, y, onClick }: BulbProps) {
  return (
    <div onClick={() => onClick(x, y)} className={on ? style.bulbOn: style.bulbOff}>
    </div>
  )
}

export { Bulb }
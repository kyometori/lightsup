import style from './Bulb.module.css'
import classnames from 'classnames'

interface BulbProps {
  coordinate: [number, number]
  hint: boolean
  on: boolean
  onClick: (x: number, y: number) => void
}

function Bulb({ coordinate: [x, y], on, onClick, hint }: BulbProps) {
  return (
    <div onClick={() => onClick(x, y)} className={classnames({
        [style.bulbOn]: on,
        [style.bulbOff]: !on,
        [style.bulbHint]: hint
      })}>
    </div>
  )
}

export { Bulb }
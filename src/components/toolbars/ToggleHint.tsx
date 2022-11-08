import style from '../Toolbar.module.css'

interface ToggleHintProps {
  show: boolean
  toggleHint: () => void
}

function ToggleHint({ show, toggleHint }: ToggleHintProps) {
  return (
    <div className={style.clickable} onClick={toggleHint}>
      <div>Hint</div>
      <div>{show ? 'On' : 'Off' }</div>
    </div>
  )
}

export { ToggleHint }
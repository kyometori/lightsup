import style from '../Toolbar.module.css'
import classnames from 'classnames'

interface ToggleHintProps {
  show: boolean
  toggleHint: () => void
}

function ToggleHint({ show, toggleHint }: ToggleHintProps) {
  return (
    <div className={classnames(style.clickable, style.right)} onClick={toggleHint}>
      <div>Hint</div>
      <div>{show ? 'On' : 'Off' }</div>
    </div>
  )
}

export { ToggleHint }
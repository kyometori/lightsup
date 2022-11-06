import style from '../Toolbar.module.css'

interface RestartButtonProps {
  restart: () => void
}

function RestartButton({ restart }: RestartButtonProps) {
  return <div className={style.clickable} onClick={restart}><div>Restart</div></div>
}

export { RestartButton }
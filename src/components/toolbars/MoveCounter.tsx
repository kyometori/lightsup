interface CounterProps {
  count: number
}

function MoveCounter({ count }: CounterProps) {
  return (
    <div>
      <div>Moves</div>
      <div>{count}</div>
    </div>
  )
}

export { MoveCounter }
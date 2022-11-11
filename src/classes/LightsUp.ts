class LightsUp {
  public board: boolean[][] = []
  private answer: number = 0
  public state: number = 0
  public moveCount: number = 0
  public static readonly completeState = 2**25 - 1
  public hint = -1
  public enableHint = false
  public useHintThisGame: boolean = false
  private startTimestamp: number = Date.now()
  private endTimestamp: number | null = null
  private readonly boardSize: number = 5
  
  constructor() {
    this.init()
  }
  
  private init() {
    for (const i of [0, 1, 2, 3, 4]) {
      this.board.push([])
      for (const _ of [0, 1, 2, 3, 4]) { 
        this.board[i].push(true)
      }
    }
    
    this.state = LightsUp.completeState
    
    this.renewGame()
  }
  
  public scramble() {
    for (const i of [0, 1, 2, 3, 4]) {
      for (const j of [0, 1, 2, 3, 4]) {
        if (randomInt(0, 1)) { this.flip(i, j) }
      }
    }
    
    if (this.state === LightsUp.completeState) this.scramble()
  }
  
  public renewGame() {
    this.scramble()
    
    this.moveCount = 0
    this.startTimestamp = Date.now()
    this.useHintThisGame = this.enableHint
    this.endTimestamp = null
  }
  
  public flip(x: number, y: number) {
    [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dr, dc]) => {
      const nr = x + dr, nc = y + dc
      if (0 <= nr && nr < this.boardSize && 0 <= nc && nc < this.boardSize) {
        this.board[nr][nc] = !this.board[nr][nc]
        this.state ^= 2**(nr*5 + nc)
      }
    })
    
    this.answer ^= 2**(x*5 + y)
    
    ++this.moveCount
    if (this.enableHint) this.getHint()
    if (this.win) this.endTimestamp = Date.now()
  }
  
  public toggleHint() {
    this.enableHint = !this.enableHint
    if (this.enableHint && !this.win) this.useHintThisGame = true
  }
  
  public get win() {
    return this.state === LightsUp.completeState
  }
  
  public get duration() {
    if (!this.endTimestamp) return Date.now() - this.startTimestamp
    return this.endTimestamp - this.startTimestamp
  }
  
  public getHint() {
    if (this.win || !this.enableHint) return this.hint = -1
    const i = this.answer & ~(this.answer - 1)
    return this.hint = Math.log2(i)
  }
  
  public getBoardSize() { return this.boardSize }
}

function randomInt(min: number, max: number) {
  return ~~(Math.random() * (max - min + 1)) + min
}

export { LightsUp }
class LightsUp {
  public board: boolean[][] = []
  private answer: number = 0
  public state: number = 0
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
    
    this.state = 2**25 - 1
    
    this.scramble()
  }
  
  public scramble() {
    for (const i of [0, 1, 2, 3, 4]) {
      for (const j of [0, 1, 2, 3, 4]) {
        if (randomInt(0, 1)) { this.flip(i, j) }
      }
    }
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
  }
  
  public getHint() {
    if (this.answer === 0) return -1
    const i = this.answer & ~(this.answer - 1)
    return Math.log2(i)
  }
  
  public getBoardSize() { return this.boardSize }
}

function randomInt(min: number, max: number) {
  return ~~(Math.random() * (max - min + 1)) + min
}

export { LightsUp }
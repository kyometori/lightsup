class LightsUp {
  public board: boolean[][] = []
  private answer: boolean[][] = []
  public state: number = 0;
  private readonly boardSize: number = 5
  
  constructor() {
    this.init()
  }
  
  private init() {
    for (const i of [0, 1, 2, 3, 4]) {
      this.board.push([])
      this.answer.push([])
      for (const _ of [0, 1, 2, 3, 4]) { 
        this.board[i].push(true)
        this.answer[i].push(false)
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
    this.board[x][y] = !this.board[x][y]
    
    this.state = this.state ^ 2**(x*5+y)
    console.log(this.state)
  }
  
  public getBoardSize() { return this.boardSize }
}

function randomInt(min: number, max: number) {
  return ~~(Math.random() * (max - min + 1)) + min
}

export { LightsUp }
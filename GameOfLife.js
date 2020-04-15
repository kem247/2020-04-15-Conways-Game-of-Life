class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  makeBoard() {
    let row = this.width;
    let col = this.height;
    let boardArr = [];
    for (let i = 0; i < col; i++) {
      let tempArr = [];
      for (let j = 0; j < row; j++) {
        tempArr.push(0);
      }
      boardArr.push(tempArr);
    }
    return boardArr;
  }

  getCell(row, col) {
    return this.board[row][col];
  }

  setCell(value, row, col) {
    this.board[row][col] = value;
  }

  toggleCell(row, col) {
    if (this.board[row][col] === 0) {
      this.board[row][col] = 1;
    } else {
      this.board[row][col] = 0;
    }
  }

  livingNeighbors(row, col) {
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i < 0 || j < 0 || i > this.height + 1 || j > this.width + 1)
          continue;
      }
      if (this.board[i][j] === 1) count++;
    }
    return count;
  }

  tick() {
    const newBoard = this.makeBoard();
    let row = this.width;
    let col = this.height;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (this.board[i][j] === 0) {
          return;
        }

        if (this.board[i][j] === 1) {
          const numNeighbors = this.livingNeighbors(i, j);
          if (numNeighbors === 2 || numNeighbors === 3) {
            newBoard[i][j] = 1;
          } else if (numNeighbors < 2 || numNeighbors > 3) {
            newBoard[i][j] = 0;
          }
        }
        if (this.board[i][j] === 0 && numNeighbors === 3) {
          newBoard[i][j] = 1;
        }
      }
    }
    this.board = newBoard;
  }
}

class Board {
  constructor(){
    const board = new Array(3).fill([]).map(()=>['', '', '']);
    this.board = board;
    this.victory = null;
    this.pieces = 0;
    this.player = 'X';
    this.onClick = this.onClick.bind(this);
    this.place = this.place.bind(this);
    //bindings 
    this.togglePlayer = this.togglePlayer.bind(this);
    this.updateVictory = this.updateVictory.bind(this);
  }

  togglePlayer() {
    this.player = this.player === 'X' ? 'O' : 'X';
  }

  place(coordinates, player) {
    if(this.victory === null) {
      const [x, y] = coordinates;
      this.board[x][y] = player;
      this.pieces++;
      this.updateVictory();
      this.togglePlayer();
    }

  }

  updateVictory() {
    let victory = null;
    //check row victory
    this.board.forEach(row=>{
      if(row[0] && row[0] === row[1] && row[1] === row[2]) {
        victory = row[0];
      }
    })
    // check column victory
    for (let column = 0; column < 3; column++) {
      const row1 = this.board[0];
      const row2 = this.board[1];
      const row3 = this.board[2]
      if (row1[column] && row1[column] === row2[column] & row2[column] === this.board[2][column]) {
        victory = this.board[0][column]
      }
    }
    const diagonal1 = this.board.map((row,index)=>row[index])
    const diagonal2 = this.board.map((row,index)=>{
      const last = row.length - 1;
      return row[last-index];
    }) 

    if(this.pieces === 27) {
      victory = false;
    }
    this.victory = victory;
  }

  onClick(event){
    //get piece
    if(this.victory === null) {
      const piece = event.target;
      const coords = piece.id.split('');
      //update html
      if(!piece.innerHTML) {
        piece.innerHTML = this.player
        //toggle piece
        this.place(coords, this.player)
      }

    }

  }

}
export default Board;

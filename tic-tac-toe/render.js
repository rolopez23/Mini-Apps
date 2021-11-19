const renderBoard = (id, board) => {
  const source = document.getElementById(id);
  let x = 0;
  board.board.forEach(row=>{
    let y = 0;
    row.forEach((value)=> {
      const cell = document.createElement("div");
      cell.innerHTML = value;
      cell.className = 'cell'
      cell.id = `${x}${y}`
      cell.addEventListener('click', board.onClick)
      source.appendChild(cell);
      y++;
    })
    x++;
  })
}

export default renderBoard;
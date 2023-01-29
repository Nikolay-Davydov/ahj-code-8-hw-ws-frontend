export default class Board {
  constructor() {
    this.board = null;
  }

  createBoard(number) {
    const board = document.createElement("div");
    board.classList.add("board");

    board.classList.add("hammer");

    for (let i = 0; i < Math.floor(number) ** 2; i += 1) {
      const field = document.createElement("div");
      field.classList.add("field");
      board.appendChild(field);
    }
    this.board = board;
  }

  getBoard(number) {
    this.createBoard(number);
    return this.board;
  }
}

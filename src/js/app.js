import Board from "./board";
import Goblin from "./goblin";
import GamePlay from "./gamePlay";

const board = new Board();
const char = new Goblin();
const gameplay = new GamePlay(board, char);

gameplay.init();

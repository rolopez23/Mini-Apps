import Board from './model.js';
import renderBoard from '/render.js';

let statusBar = document.createElement('header');
const header = document.getElementById('header')

let board = new Board;
renderBoard('board', board);



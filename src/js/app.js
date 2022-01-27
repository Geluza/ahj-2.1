// TODO: write your code here

const cellArr = Array.from(document.getElementsByClassName('cell'));
const activeCell = document.getElementsByClassName('cell_with_char')[0];
const arrLength = cellArr.length;
const cell = (index) => document.getElementById(`cell${index}`);

const activation = Math.floor(1 + Math.random() * arrLength);
const randomGame = setInterval(() => activeCell.classList.remove('cell_with_char'),
  cellArr[activation].classList.add('cell_with_char'), 1000);

randomGame();

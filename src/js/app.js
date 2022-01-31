// TODO: write your code here

function randomGame() {
    setInterval
    const cellArr = Array.from(document.getElementsByClassName('cell'));
    const arrLength = cellArr.length;
    const activeIndex = cellArr.findIndex((cell) => cell.classList.contains('cell_with_char'));
    cellArr[activeIndex].classList.remove('cell_with_char');
    const activation = Math.floor(1 + Math.random() * arrLength);
    cellArr[activation].classList.add('cell_with_char');
}

setInterval(randomGame, 1000);

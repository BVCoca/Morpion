const cells = document.getElementsByClassName("cell");
const p1 = 'X'; const p2 = 'O';
let playerTurn = p1;

cells.forEach(cell => {
    cells.addEventListener('click',playGame, { once: true })
});

function playGame (e){
    e.innerHTML
}
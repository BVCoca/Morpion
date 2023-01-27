const cells = document.querySelectorAll("[data-cell]");
const p1 = 'X'; const p2 = 'O';
let playerTurn = p1;

cells.forEach(cell => {
    cell.addEventListener('click', playGame, { once: true });
});

function playGame(e) {
    e.target.innerHTML = playerTurn;

    updateStatus(playerTurn);
    playerTurn == p1 ? playerTurn = p2 : playerTurn = p1
}

function updateStatus(status) {
    let statusText;

    switch (status) {
        case 'X':
            statusText = "Joueur 2, à toi d'jouer !"
            break;
        case 'O':
            statusText = "Joueur 1, à toi d'jouer !"
            break;
        case 'winsP1':
            statusText = "Joueur 1, t'as gagné mashallah !"
            break;
        case 'winsP2':
            statusText = "Joueur 2, t'as gagné mashallah !"
            break;
        case 'draw':
            statusText = "Personne n'a gagné les pélo"
            break;
    }

    gameStatus.innerHTML = statusText;
}


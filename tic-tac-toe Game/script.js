let cells = document.querySelectorAll('.cell');
let statusDisplay = document.getElementById('status');
let currentPlayer = 'X';
let gameActive = false;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function startGame() {
    gameActive = true;
    gameState = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = 'X';
    statusDisplay.innerHTML = `Current Player: ${currentPlayer}`;
    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.classList.remove('disabled');
        cell.style.backgroundColor = "#fff"; // Reset color
    });
}

function handleCellClick(clickedCell, clickedCellIndex) {
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    // Place current player's symbol
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    clickedCell.classList.add('disabled');

    checkForWinner();

    // Switch player if game is still active
    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.innerHTML = `Current Player: ${currentPlayer}`;
    }
}

function checkForWinner() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            statusDisplay.innerHTML = `Player ${gameState[a]} wins! 🎉`;
            gameActive = false;

            // Highlight winning cells
            cells[a].style.backgroundColor = "#90EE90";
            cells[b].style.backgroundColor = "#90EE90";
            cells[c].style.backgroundColor = "#90EE90";
            return;
        }
    }

    // Check for draw
    if (!gameState.includes("")) {
        statusDisplay.innerHTML = "It's a draw! 😃";
        gameActive = false;
    }
}

// Event listeners
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
});
document.getElementById('startBtn').addEventListener('click', startGame);

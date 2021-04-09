export const calculateWinner = (squares) => {
    // shows all of the winning combinations ("lines")
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Iterate over all the winning line combinations to see if the input squares array has one of the with all 'X's or all 'O's. If it does, return 'X' or 'O'.
    for (let line of lines) {
        const [a, b, c] = line;
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return {
                winner: squares[a],
                winningSquares: line,
            };

        }
    }
    // If none of the winning line combinations is contained in input squares array, return null...
    return null;
};

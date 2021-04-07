import React from 'react';
import { calculateWinner } from '../utils/calculateWinner';

const initialScore = {X: 0, O: 0};
const initialBoard = Array(9).fill(null);
const initialState = {
    board: initialBoard,
    score: initialScore,
    turn: 'X',
};

function gameReducer(state, action) {
    switch (action.type) {
        case 'SET_CELL': {
            const newBoard = state.board.map((c, i) => action.cell === i ? state.turn : c);
            const winner = calculateWinner(newBoard);
            const newScore = {...state.score}
            if (winner) {
                newScore[winner] = newScore[winner] + 1;
            }
            return {
                board: newBoard,
                score: newScore,
                turn: state.turn === 'X' ? 'O' : 'X',
            };
        }
        case 'RESET_GAME': {
            return {...initialState};
        }
        case 'NEW_TURN': {
            return {
                ...state,
                board: initialBoard,
            }
        }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const useGame = () => {
    const [state, dispatch] = React.useReducer(gameReducer, initialState);
    const {board, turn, score} = state;

    const winner = calculateWinner(board);
    const setCell = cell => {
        if (winner || board[cell]) return;
        dispatch({type: 'SET_CELL', cell});
    };
    const resetGame = () => dispatch({type: 'RESET_GAME'});
    const newTurn = () => dispatch({type: 'NEW_TURN'});

    let status;
    if (winner) status = `Winner: ${winner}`;
    else if (board.every(Boolean)) status = 'Even';
    else status = `Next player: ${turn}`;

    return {board, turn, setCell, score, resetGame, newTurn, status};
}

export { useGame };
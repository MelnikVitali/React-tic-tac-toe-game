import { calculateWinner } from '../utils/calculateWinner';

import { types } from './types';

const initialState = {
    history: [{
        squares: Array(9).fill(null),
        clickedSquare: [0, 0]
    }],
    score: {X: 0, O: 0},
    gameMode: '',
    gameSelectedPlayer: '',
    stepNumber: 0,
    p1IsNext: true,
    currentPlayer: '',
};

const gameReducer = (state, action) => {
    switch (action.type) {
        case types.SET_MODE:
            return {
                ...state,
                gameMode: action.mode,
            };

        case types.SET_PLAYER:
            return {
                ...state,
                gameSelectedPlayer: action.player,
                currentPlayer: state.p1IsNext ? (action.player === 'X' ? 'X' : 'O') : action.player
            };

        case types.SET_CELL:
            const winner = calculateWinner(action.newBoardState.squares);
            const newScore = {...state.score};

            if (winner) {
                newScore[winner.winner] = newScore[winner.winner] + 1;
            }

            return {
                ...state,
                history: [
                    ...state.history.slice(0, state.stepNumber + 1),
                    action.newBoardState
                ],
                stepNumber: state.stepNumber + 1,
                p1IsNext: !state.p1IsNext,
                currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
                score: newScore,
            };

        case types.JUMP_TO:
            const player = state.gameSelectedPlayer;
            const opponent = (player === 'X') ? 'O' : 'X';

            return {
                ...state,
                stepNumber: action.move,
                p1IsNext: (action.move % 2) === 0,
                currentPlayer: (action.move % 2) === 0 ? player : opponent
            };

        case types.RESET_GAME:
            return {...initialState};

        case types.NEW_TURN:
            return {
                ...state,
                history: [{
                    squares: Array(9).fill(null),
                }],
                stepNumber: 0,
                p1IsNext: true,
                currentPlayer: state.gameSelectedPlayer === 'X' ? 'X' : 'O'
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export { gameReducer, initialState };

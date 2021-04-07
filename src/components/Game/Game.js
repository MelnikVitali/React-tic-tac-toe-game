import React, { useReducer } from 'react';

import { calculateWinner } from '../../utils/calculateWinner';

import Board from '../Board';
import Controllers from '../Controllers';
import Info from '../Info';

import './Game.css';

import useStyles from './styles';
import GameSetting from '../GameSetting';

const SET_PLAYER = 'SET_PLAYER';
const SET_PIECE = 'SET_PIECE';
const SET_SCORE = 'SET_SCORE';
const SET_CELL = 'SET_CELL';
const JUMP_TO = 'JUMP_TO';
const RESET_GAME = 'RESET_GAME';
const NEW_TURN = 'NEW_TURN';


const initialState = {
    history: [{
        squares: Array(9).fill(null),
    }],
    score: {X: 0, O: 0},
    gameMode: '',
    gamePiece: '',
    stepNumber: 0,
    // turn: 'X',
    // p1IsNext: true,
    // currentPlayer: '',
    xIsNext: true,
};

const gameReducer = (state, action) => {
    switch (action.type) {
        case SET_PLAYER:
            return {
                ...state,
                gameMode: action.mode,
            };

        case SET_PIECE:
            return {
                ...state,
                xIsNext: action.piece === 'X',
                // currentPlayer: state.p1IsNext ? action.piece === 'X' ? 'O' : 'X' : action.piece,
                gamePiece: action.piece
            };

        case SET_CELL:
            const winner = calculateWinner(action.newBoardState.squares);
            const newScore = {...state.score};

            if (winner) {
                newScore[winner] = newScore[winner] + 1;
            }

            return {
                ...state,
                history: [...state.history.slice(0, state.stepNumber + 1), action.newBoardState],
                stepNumber: state.stepNumber + 1,
                xIsNext: !state.xIsNext,
                score: newScore,
            };

        case JUMP_TO:
            return {
                ...state,
                stepNumber: action.step,
                xIsNext: (action.step % 2) === 0,
            };

        case RESET_GAME: {
            return {...initialState};
        }
        case NEW_TURN: {
            return {
                ...state,
                history: [{
                    squares: Array(9).fill(null),
                }],
                stepNumber: 0,
                xIsNext: action.piece === 'X',
            }
        }

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const Game = () => {
    const classes = useStyles();

    const [state, dispatch] = useReducer(gameReducer, initialState);

    const {history, stepNumber, turn, score, xIsNext, gameMode, gamePiece} = state;

    const currentBoard = history[stepNumber];

    const winner = calculateWinner(currentBoard.squares);

    const setPlayer = (mode) => {
        dispatch({type: SET_PLAYER, mode});
    };

    const setPiece = (piece) => {
        dispatch({type: SET_PIECE, piece});
    };

    const clickCell = index => {

        const newSquares = [...currentBoard.squares];
        // Determine if the cell was clicked or the game is over
        if (winner || newSquares[index]) {
            return;
        }

        // Determine whose move is X ? 0
        newSquares[index] = xIsNext ? 'X' : 'O';

        // Update state
        dispatch({type: SET_CELL, newBoardState: {squares: newSquares}});
    };

    const jumpTo = (step) => {
        dispatch({type: JUMP_TO, step});
    };

    const moves = history.map((step, move) => {
        const desc = move ?
            `Go to move #${move}` :
            'Go to game start';
        return (
            <li key={move} >
                <button onClick={() => jumpTo(move)} >{desc}</button >
            </li >
        );
    });

    const resetGame = () => dispatch({type: 'RESET_GAME'});
    const newTurn = () => dispatch({type: 'NEW_TURN'});

    let status;
    if (winner) status = `Winner: ${winner}`;
    else if (currentBoard.squares.every(Boolean)) status = 'Even';
    else status = `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div className={classes.container} >
            <h1 >The <span className={classes.gameName} >Tic-Tac-Toe</span > Game</h1 >
            {(gameMode !== '' && gamePiece !== '') ?
                <>
                    <Info score={score} status={status} />
                    <Board squares={currentBoard.squares} clickCell={clickCell} />
                    <Controllers controllers={{resetGame, newTurn}} />
                    <div >
                        <h3 >History</h3 >
                        <ol >{moves}</ol >
                    </div >
                </>
                :
                <GameSetting
                    mode={gameMode}
                    setPlayer={setPlayer}
                    setPiece={setPiece}
                    resetGame={resetGame}
                />
            }
        </div >
    );
};

export default Game;

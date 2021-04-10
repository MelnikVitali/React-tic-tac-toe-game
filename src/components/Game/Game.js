/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useReducer } from 'react';

import { Box, Button, Link } from '@material-ui/core';

import Board from '../Board';

import Controllers from '../Controllers';
import GameSetting from '../GameSetting';
import Info from '../Info';
import History from '../History';

import { gameReducer, initialState, types } from '../../reducers/gameReducer';

import { calculateWinner } from '../../utils/calculateWinner';
import { findBestSquare } from '../../utils/findBestSquare';

import useStyles from './styles';

const Game = () => {
    const classes = useStyles();

    const [state, dispatch] = useReducer(gameReducer, initialState);

    const {history, stepNumber, p1IsNext, score, gameMode, gameSelectedPlayer, currentPlayer} = state;

    const currentBoard = history[stepNumber];

    const winner = calculateWinner(currentBoard.squares);

    const setMode = (mode) => {
        dispatch({type: types.SET_MODE, mode});
    };

    const setPlayer = (player) => {
        dispatch({type: types.SET_PLAYER, player});
    };

    const clickCell = (index) => {
        if (gameMode === 'playerVersusBot' && !p1IsNext) {
            return;
        }
        // Apply player move to square i
        makeMove(index);
    };

    const aiMove = () => {
        const squares = [...currentBoard.squares];
        const bestSquare = findBestSquare(squares, currentPlayer === 'X' ? 'X' : 'O');
        if (bestSquare !== -1) {
            makeMove(bestSquare);
        }
    };

    const makeMove = (index) => {
        const newSquares = [...currentBoard.squares];
        // Determine if the cell was clicked or the game is over
        if (winner || newSquares[index]) {
            return;
        }
        // Determine whose move is X ? 0
        newSquares[index] = currentPlayer;

        // Update state
        const nextState = {
            type: types.SET_CELL,
            newBoardState: {
                squares: newSquares,
                clickedSquare: [Math.floor((index % 3) + 1), Math.floor((index / 3) + 1)],
                currentPlayer: currentPlayer
            }
        };

        dispatch(nextState);
    };

    //moving through the history of moves
    const jumpTo = (step) => {
        dispatch({type: types.JUMP_TO, step});
    };

    //control game
    const resetGame = () => dispatch({type: 'RESET_GAME'});
    const newTurn = () => dispatch({type: 'NEW_TURN'});

    //render the history of moves
    const moves = history.map((step, move) => {
        const clickedSquare = step.clickedSquare;
        const player = step.currentPlayer;
        const desc = move ?
            `Move '${player}' #  ${move} - (${clickedSquare[0]},${clickedSquare[1]})` :
            `Game start`;

        return (
            <li key={move} >
                <Button color="primary" >
                    <Link
                        href="#"
                        className={state.stepNumber === move ? classes.historyLinkActive : null}
                        onClick={() => jumpTo(move)} >
                        {desc}
                    </Link >
                </Button >
            </li >
        );
    });

    //status game
    let status;
    if (winner) status = `Winner: ${winner.winner}`;
    else if (currentBoard.squares.every(Boolean)) status = 'Even';
    else status = `Next player: ${currentPlayer === 'X' ? 'X' : 'O'}`;

    return (
        <div className={classes.container} >
            <Box component="h1" >The <span className={classes.gameName} >Tic-Tac-Toe</span > Game</Box >
            {(gameMode !== '' && gameSelectedPlayer !== '') ?
                <>
                    <Info score={score} status={status} />
                    <Board
                        squares={currentBoard.squares}
                        winner={winner && winner.winningSquares}
                        aiMove={(currentPlayer !== '' && gameMode === 'playerVersusBot' && !p1IsNext) ?
                            aiMove
                            : null}
                        clickCell={clickCell}
                    />
                    <Controllers controllers={{resetGame, newTurn}} />
                    <History moves={moves} />
                </>
                :
                <GameSetting
                    mode={gameMode}
                    setPlayer={setPlayer}
                    setMode={setMode}
                    resetGame={resetGame}
                />
            }
        </div >
    );
};

export default Game;

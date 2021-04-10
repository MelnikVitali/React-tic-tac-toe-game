import React, { memo, useEffect, useRef } from 'react';

import { Paper } from '@material-ui/core';

import Square from '../Square';

import useStyles from './styles';

const Board = memo(({squares, clickCell, winner, aiMove}) => {
    const classes = useStyles();
    const timeoutAiMove = 500;

    const timer = useRef(null);

    useEffect(() => {
        if (aiMove && !winner) {
            timer.current = setTimeout(() => aiMove(), timeoutAiMove);
        }

        return () => {
            clearTimeout(timer.current);
        };
    }, [aiMove, winner]);

    return (
        <Paper elevation={3} className={classes.board} >
            {
                squares.map((square, i) => (

                    <Square
                        key={i}
                        value={square}
                        winningSquare={winner && winner.includes(i)}
                        clickCell={() => clickCell(i)}
                    />
                ))
            }
        </Paper >
    );
});

export default Board;

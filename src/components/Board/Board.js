import React, { memo, useEffect } from 'react';

import { Paper } from '@material-ui/core';

import Square from '../Square';

import useStyles from './styles';

const Board = memo(({squares, clickCell, winner, aiMove}) => {
    const classes = useStyles();

    useEffect(() => {
        if (aiMove && !winner) {
            setTimeout(() => aiMove(), 500);
        }
    }, [aiMove, winner]);

    return (
        <Paper elevation={3} className={classes.board} >
            {
                squares.map((square, i) => (

                    <Square
                        key={i}
                        value={square}
                        winningSquare={(Boolean(winner && winner.includes(i)))}
                        clickCell={() => clickCell(i)}
                    />
                ))
            }
        </Paper >
    );
});

export default Board;

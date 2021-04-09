import React, { useEffect } from 'react';
import Square from '../Square';
import { Paper } from '@material-ui/core';

import useStyles from './styles';

const Board = ({squares, clickCell, winner, aiMove}) => {
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
};

export default Board;

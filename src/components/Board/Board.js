import React from 'react';
import Square from '../Square';
import { Paper } from '@material-ui/core';

import useStyles from './styles';

const Board = ({squares, clickCell}) => {
    const classes =useStyles();

    return (
        <Paper elevation={3} className={classes.board}>
                {
                    squares.map((square, i) => (

                        <Square
                            key={i}
                            value={square}
                            clickCell={() => clickCell(i)}
                        />
                    ))
                }
        </Paper >
    );
};

export default Board;

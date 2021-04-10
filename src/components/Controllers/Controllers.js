import React from 'react';

import { Button } from '@material-ui/core';

import useStyles from './styles';

const Controllers = ({controllers: c}) => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Button
                onClick={c.resetGame}
                size="large"
                variant="contained"
                color="primary"
                className={classes.btn}
            >
                ↻ Reset game
            </Button >
            <Button
                onClick={c.newTurn}
                size="large"
                variant="contained"
                color="primary"
                className={classes.btn}
            >
                ⇝ New turn
            </Button >
        </div >
    );
};

export default Controllers;

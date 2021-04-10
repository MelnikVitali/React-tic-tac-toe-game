import React, { memo } from 'react';

import { Button } from '@material-ui/core';

import useStyles from './styles';

const Square = memo(({value, clickCell, winningSquare}) => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            className={[
                classes.square,
                winningSquare ? classes.winningSquare : null
            ].join(' ')}
            onClick={clickCell}
        >
            {value}
        </Button >
    );
});

export default Square;

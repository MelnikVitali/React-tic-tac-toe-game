import React from 'react';

import { Button } from '@material-ui/core';

import useStyles from './styles';

const Square = ({value, clickCell}) => {
    const classes = useStyles();
    return (
        <Button
            variant='contained'
            className={classes.square}
            onClick={clickCell}
        >
            {value}
        </Button >
    );
};

export default Square;

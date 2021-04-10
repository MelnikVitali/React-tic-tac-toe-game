import React from 'react';

import { Typography } from '@material-ui/core';

import useStyles from './styles';

const History = ({moves}) => {
    const classes = useStyles();

    return (
        <div className={classes.historyContainer} >
            <Typography component="h3" variant="h6" gutterBottom className={classes.title} >History</Typography >
            <Typography component="ol" variant="subtitle1" >
                {moves}
            </Typography >
        </div >
    );
};

export default History;

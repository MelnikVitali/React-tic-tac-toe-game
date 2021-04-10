import React from 'react';

import useStyles from './styles';

const Info = ({score, status}) => {
    const classes = useStyles();

    let maxWin;
    if (score.X > score.O) {
        maxWin = '👈';
    } else if (score.O > score.X) {
        maxWin = '👉';
    } else {
        maxWin = '🤟';
    }

    return (
        <>
            <div className={classes.result} >
                <p >Player X: <span className={classes.score} >{score.X}</span ></p >
                <p className={classes.maxWin} >{maxWin}</p >
                <p >Player O: <span className={classes.score} >{score.O}</span ></p >
            </div >
            <p ><span className={classes.statusResult} >{status}</span ></p >
        </>
    );
};

export default Info;

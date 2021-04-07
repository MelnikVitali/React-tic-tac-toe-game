import React from 'react';
import { Box, Button, Paper, Typography } from '@material-ui/core';

import useStyles from './styles';

const GameSetting = ({mode, setPlayer, setPiece, resetGame}) => {
    const classes = useStyles();

    return (
        mode === '' ?
            <Paper elevation={3} className={classes.gameSettingContainer} >
                <Typography variant='h3' component='h1' className={classes.title} >Choose game type:</Typography >
                <Box component='div' >
                    <Button
                        variant="contained"
                        color='primary'
                        className={classes.btn}
                        onClick={() => setPlayer('playerVersusBot')}
                    >
                        One Player
                    </Button >
                    <Button
                        variant="contained"
                        color='primary'
                        className={classes.btn}
                        onClick={() => setPlayer('playerVersusPlayer')}
                    >
                        Two Player
                    </Button >
                </Box >
            </Paper >
            :
            <Paper elevation={3} className={classes.gameSettingContainer} >
                <Typography variant='h3' component='h1' className={classes.title} >Choose your fighter:</Typography >
                <Box component='div' className={classes.btnGroup} >
                    <Button
                        variant="contained"
                        color='inherit'
                        size="large"
                        className={[classes.btn, classes.btnPiece].join(' ')}
                        onClick={() => setPiece('X')}
                    >
                        X
                    </Button >
                    <div className={classes.or} >or</div >
                    <Button
                        variant="contained"
                        color='inherit'
                        className={[classes.btn, classes.btnPiece].join(' ')}
                        size="large"
                        onClick={() => setPiece('0')}
                    >
                        O
                    </Button >
                </Box >
                <br />
                <Button
                    color='primary'
                    variant='outlined'
                    className={classes.btnBack}
                    onClick={resetGame}
                >

                    ⇜Back
                </Button >
            </Paper >
    );
};

export default GameSetting;

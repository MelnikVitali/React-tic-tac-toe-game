import React from 'react';

import {
    Button,
    Dialog, DialogActions,
    DialogTitle,
} from '@material-ui/core';

import useStyles from './styles';

const GameSetting = ({mode, setPlayer, setMode, resetGame}) => {
    const classes = useStyles();

    return (
        mode === '' ?
            <Dialog
                open={true}
                maxWidth="sm"
            >
                <DialogTitle className={classes.title} >{'Choose game type:'}</DialogTitle >
                <DialogActions >
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.btn}
                        onClick={() => setMode('playerVersusBot')}
                    >
                        One Player
                    </Button >
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.btn}
                        onClick={() => setMode('playerVersusPlayer')}
                    >
                        Two Player
                    </Button >
                </DialogActions >
            </Dialog >
            :
            <Dialog
                open={true}
                maxWidth="sm"
            >
                <DialogTitle className={classes.title} >{'Choose your fighter:'}</DialogTitle >
                <DialogActions >
                    <Button
                        variant="contained"
                        color="inherit"
                        size="large"
                        className={[classes.btn, classes.btnPiece].join(' ')}
                        onClick={() => setPlayer('X')}
                    >
                        X
                    </Button >
                    <div className={classes.or} >or</div >
                    <Button
                        variant="contained"
                        color="inherit"
                        className={[classes.btn, classes.btnPiece].join(' ')}
                        size="large"
                        onClick={() => setPlayer('O')}
                    >
                        O
                    </Button >
                </DialogActions >
                <div >
                    <Button
                        color="primary"
                        className={classes.btnBack}
                        onClick={resetGame}
                    >

                        ⇜ Back
                    </Button >
                </div >
            </Dialog >

    );
};

export default GameSetting;

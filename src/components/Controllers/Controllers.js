import React from 'react';

import './Controllers.css';
import { Button } from '@material-ui/core';

const Controllers = ({controllers: c}) => {
    return (
        <div className='controllers'>
            <Button onClick={c.resetGame} variant="contained" color='primary'>↻Reset game</Button>
            <Button onClick={c.newTurn} variant="contained" color='primary'>⇝New turn</Button>
        </div>
    );
};

export default Controllers;

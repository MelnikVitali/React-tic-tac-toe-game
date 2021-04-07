import Game from './components/Game';

import './App.css';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';

function App() {
    return (
        <div className="App" >
            {/*<AppBar position="static">*/}
            {/*    <Toolbar>*/}
            {/*        <Typography variant='h3' align='center' style={{flexGrow: 1}}>*/}
            {/*            <Box textAlign="center">TicTacToe</Box>*/}
            {/*        </Typography>*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>*/}
            <Game />
        </div >
    );
}

export default App;

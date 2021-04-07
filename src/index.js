import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import App from './App';

ReactDOM.render(
    <React.StrictMode >
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <App />
        </ThemeProvider >
    </React.StrictMode >,
    document.getElementById('root')
);


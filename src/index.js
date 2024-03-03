import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyles.js'
import Routes from './routes.js'

ReactDOM.render(
    <>
        <Routes /> <GlobalStyle />
    </>,
    document.getElementById('root'));
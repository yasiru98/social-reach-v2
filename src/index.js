import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from "@material-ui/core/styles";
import App from './components/app/App';
import theme from './theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  < MuiThemeProvider  theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ MuiThemeProvider >,
  document.getElementById('root'),
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

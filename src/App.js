

import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import history from './history';
import './App.css';

import { useDispatch, useSelector, useStore } from "react-redux";
import { Backdrop, CircularProgress} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

import {globalStyles} from './styles/global.js';

import Notify from './components/page/Notify';
import Users from './screens/users/Main';



import {THEME} from './styles/theme.js'
import {MuiThemeProvider} from '@material-ui/core/styles';







function App() {
  const loading = useSelector(state => state.main.loading);
  const classes = globalStyles();


  return (
    <MuiThemeProvider theme={THEME}>
     <Router history={history}>
         <div>
         <Backdrop className={classes.backdrop} open={loading}>
           <CircularProgress color="inherit" />
         </Backdrop>
         <Notify />
         <Route exact path="/" component={Users} />
         </div>
       </Router>
     </MuiThemeProvider>
  );
}

export default App;

// we removed the script tags from the html, so now need to require
// var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
// var ReactDOM = require('react-dom');
// ES6 de-structuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Main from 'main';

// var Main = require('Main');
// above is done instead of below for each object we want
// var Route = require('react-router').Route;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
document.getElementById('app')
);

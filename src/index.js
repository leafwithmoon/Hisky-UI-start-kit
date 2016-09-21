import 'babel-polyfill';
import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Main from './container/main.jsx'

const Routes = ({history}) =>
    <Router history={history}>
        <Route path='/' component={Main}/>
    </Router>

ReactDOM.render(<Routes history={browserHistory}/>, document.getElementById('root'))

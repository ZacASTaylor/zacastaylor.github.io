import {hot} from 'react-hot-loader/root';
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header'
import Home from './components/Home'
import Resume from './components/Resume'
import Other from './components/Other'


function App() {
    return (
        <Router>
            <div className="main-container d-flex w-100 h-100 mx-auto flex-column" style={{paddingBottom: "10em"}}>
                <Header/>
                <Route exact path='/'
                       component={Home}
                />
                <Route exact path='/resume'
                       component={Resume}
                />
                <Route exact path='/other'
                       component={Other}
                />
            </div>
        </Router>
    );
}

export default hot(App);

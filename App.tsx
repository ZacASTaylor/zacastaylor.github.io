import {hot} from 'react-hot-loader/root';
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Header from './public/components/Header'
import Home from './public/components/Home'
import Resume from './public/components/Resume'
import Other from './public/components/Other'


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

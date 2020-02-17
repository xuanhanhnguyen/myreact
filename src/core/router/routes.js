import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from '../include/Home';
import News from '../include/News';
import NewDetail from '../include/NewDetail';
import Contact from '../include/Contact';

class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/" render={() =>
                        <Redirect
                            to={{
                                pathname: "/home"
                            }}
                        />
                }></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/tin-tuc" component={News}></Route>
                <Route path="/:title.:id.html" component={NewDetail}></Route>
                <Route path="/lien-he" component={Contact}></Route>
            </div>
        );
    }
}

export default Routes;
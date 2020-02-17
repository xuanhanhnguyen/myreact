import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import '../../css/App.css';
import Footer from './Footer';
import Header from './Header';
import Routes from '../router/routes'


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <Routes/>
                </main>
                <Footer/>
            </Router>
        );
    }
}

export default App
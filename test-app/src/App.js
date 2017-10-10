import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './containers/form';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="column-1">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="column-2">
                    <FormContainer />
                </div>
            </div>
        );
    }
}

export default App;
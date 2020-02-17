import React, { Component } from 'react';
import BottomBar from '../BottomBar/BottomBar.jsx';
import Home from '../Home/Home.jsx';

class Main extends Component {
    render() {
        return (
            <div>
                <Home />
                <BottomBar />
            </div>
        );
    }
}

export default Main;

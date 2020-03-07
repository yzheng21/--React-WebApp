import React, { Component } from 'react';
import BottomBar from '../BottomBar/BottomBar.jsx';
import Home from '../Home/Home.jsx';
import Loadable from 'react-loadable';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './Loading.jsx';

const Order = Loadable({
    loader: () => import(/* webpackChunkName: "order" */'../Order/Order.jsx'),
    loading: Loading,
});

const My = Loadable({
    loader: () => import(/* webpackChunkName: "my" */'../My/My.jsx'),
    loading: Loading,
});

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Route exact path="/home" component={Home} />
                <Route path="/order" component={Order}/>
                <Route path="/my" component={My}/>
                <BottomBar />
            </div>
        );
    }
}

export default withRouter(connect()(Main));

import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import Category from './Category/Category.jsx';

/**
 * @constructor <Home />
 * @description 首页tab代码
 */

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Category />
            </div>
        );
    }
}

export default Home;

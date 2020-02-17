import React, { Component } from 'react';
import './Header.scss';
import SearchBar from '../SearchBar/SearchBar.jsx';
/**
 * @constructor <Header />
 * @description 顶部banner
 */

class Header extends Component {
    render() {
        return (
            <div className="header">
                <SearchBar />
                <div className="banner-img"></div>
            </div>
        );
    }
}

export default Header;
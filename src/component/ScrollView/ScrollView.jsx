import './ScrollView.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../Loading/Loading.jsx';

/**
 * <ScrollView loadCallback={function} isend={bool}/>
 * @description 滚动加载组件
 */

class ScrollView extends Component {
    constructor(props) {
        super(props);
        this._onLoadPage = this.onLoadPage.bind(this);
    }

    onLoadPage() {
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        let proLoadDis = 30;

        if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
            if (!this.props.isend) {
                if (!this.props.readyToLoad) {
                    return;
                }
                this.props.loadCallback && this.props.loadCallback();
            }
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this._onLoadPage);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this._onLoadPage);
    }

    render() {
        return (
            <div className="scrollview">
                {this.props.children}
                <Loading isend={this.props.isend}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
        readyToLoad: state.scrollViewReducer.readyToLoad
});
export default connect(mapStateToProps)(ScrollView);
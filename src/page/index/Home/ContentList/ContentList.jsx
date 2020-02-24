import './ContentList.scss';
import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../../../../component/ListItem/ListItem.jsx';
import { getListData } from '../../actions/contentListAction';
import ScrollView from '../../../../component/ScrollView/ScrollView.jsx';


/**
 * @constructor <ContentList />
 * @description 附近商家列表
 */

class ContentList extends React.Component {
    constructor(props) {
        super(props);
        // 请求第一屏数据
        this.fetchData();
    }

    onLoadPage(){
        // 最多滚动3页
        if (this.props.page <= 3) {
            this.fetchData();
        }
    }

    fetchData(){
        this.props.dispatch(getListData({}));
    }

    renderItems(){
        let list = this.props.list;
        return list.map((item, index)=>{
            return <ListItem key={index} itemData={item}></ListItem>
        });
    }

    render(){
        return (
            <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>
                </h4>
                <ScrollView 
                    loadCallback={this.onLoadPage.bind(this)} 
                    isend={this.props.isend}>
                    {this.renderItems()}
                </ScrollView>
            </div>
        );
    }
}

export default connect(
    state =>({
        page: state.contentListReducer.page,
        list: state.contentListReducer.list,
        isend: state.contentListReducer.isend
    })
)(ContentList);

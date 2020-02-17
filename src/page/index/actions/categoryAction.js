import { HEAD_DATA } from './actionTypes';
import axios from 'axios';

export const getHeaderData = ()=> (dispatch) =>{
    // let resp = await axios({
    //     method: 'get',
    //     url: './json/head.json',
    // });

    // dispatch({
    //     type: HEAD_DATA,
    //     obj: resp.data
    // });
    
    axios({
        method: 'get',
        url: './json/head.json',
    }).then(resp => {
        dispatch({
            type: HEAD_DATA,
            obj: resp.data
        })
    });
}

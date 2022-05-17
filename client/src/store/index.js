import {configureStore} from '@reduxjs/toolkit'

const initialState = {
    dataList: [],
    queryString: '',
}

function reducer (state=initialState, action) {
    switch (action.type){
        case 'searchClick':
            return Object.assign({}, state, 
                {dataList: action.data, queryString: action.queryString} )
        default:
            return state;
    }
}

const store = configureStore({reducer});

export default store;
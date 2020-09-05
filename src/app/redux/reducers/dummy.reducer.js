import {
    DUMMY_ACTION,
    DUMMY_ACTION_SUCCESS,
    DUMMY_ACTION_ERROR
}from '../actions/action.types';

const initialState = {
    isLoading: false,
    error: false
}
export default function (state = initialState, action) {
    switch(action.type){
        case DUMMY_ACTION:{
            return {
                ...state,
                isLoading: true,
                error: false
            }
        }
        case DUMMY_ACTION_SUCCESS:{
            console.log(action.data)
            return {
                ...state,
                isLoading: false,
                error: false
            }
        }
        case DUMMY_ACTION_ERROR:{
            return {
                ...state,
                isLoading: false,
                error: true
            }
        }
        default: return state;
    }
}
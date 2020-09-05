import {
    DUMMY_ACTION,
    DUMMY_ACTION_SUCCESS,
    DUMMY_ACTION_ERROR
} from './action.types';

export const dummyAction = (filter, cb) => ({
    type: DUMMY_ACTION,
    filter,
    cb
});
export const dummyActionSuccess = (data) => ({
    type: DUMMY_ACTION_SUCCESS,
    data: data
});

export const dummyActionError = (error) => ({
    type: DUMMY_ACTION_ERROR,
    error: error
});

import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import * as dataAccess from '../../utils/fetch.api';
import {
    DUMMY_ACTION
} from '../actions/action.types';

import {
    dummyActionSuccess,
    dummyActionError
} from '../actions/dummy.action';
import { BASE_URL } from '../../utils/constants';

const fetchData = async (url) => await dataAccess.get(url);

export function* dummySagaFunction(param) {
    const url = `${BASE_URL}`;
    try {
        const response = yield call(fetchData, url);
        yield put(dummyActionSuccess(response));
        if (param.cb && response[0])
            param.cb(response[0]);
    } catch (error) {
        yield put(dummyActionError(error));
    }
}

export function* payloadWatcher() {
    yield takeEvery(DUMMY_ACTION, dummySagaFunction);
}

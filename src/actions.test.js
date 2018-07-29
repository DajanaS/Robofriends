import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING
} from "./constants";

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]); // export if used in other tests

describe('searchRobots', () => {
    it('creates an action', () => {
        const text = 'wooo';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        };
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });
});

describe('requestRobots', () => {
    it('handles requesting robots API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        };
        expect(action[0]).toEqual(expectedAction);
    });
});
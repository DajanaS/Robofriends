import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";

import * as reducers from './reducers';
import * as actions from './actions';

describe('searchRobots', () => {
    it('returns the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''});
    });

    it('handles CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(reducers.initialStateSearch, actions.setSearchField('abc'))).toEqual({searchField: 'abc'});
    });
});

describe('requestRobots', () => {
    it('returns the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(reducers.initialStateRobots);
    });

    it('handles REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(reducers.initialStateRobots, {type: REQUEST_ROBOTS_PENDING})).toEqual({
            robots: [],
            isPending: true,
            error: ""
        });
    });

    it('handles REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(reducers.initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false,
            error: ""
        });
    });

    it('handles REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(reducers.initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'ERROR'
        })).toEqual({
            robots: [],
            isPending: false,
            error: "ERROR"
        });
    });
});
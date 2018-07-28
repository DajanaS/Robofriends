import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: 'a',
        isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots with search value present', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);

    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    };
    wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

it('filters robots with search value not present', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    };
    const filteredRobots = [];
    wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
});

it('filters robots with pending true', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: true
    };
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual([]);
});
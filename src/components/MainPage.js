import React, {Component} from 'react';

import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    };

    render() {
        const {onSearchChange, isPending} = this.props;
        return (
            <div className='tc'>
                <Header/>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    {isPending ? <h1 className='tc'>Loading...</h1> :
                        <ErrorBoundary>
                            <CardList robots={this.filterRobots()}/>
                        </ErrorBoundary>
                    }
                </Scroll>
            </div>
        );
    }
}

export default MainPage;
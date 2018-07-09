import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { // equivalent of try catch block
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>There is an error.</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
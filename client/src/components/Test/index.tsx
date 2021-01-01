import React, { Component } from 'react';
import axios from 'axios';

interface Time {
    time: number;
}

interface TestState {
    time: number;
}

class Test extends Component<any, TestState> {
    constructor(props: any) {
        super(props);

        this.state = { time: 0 };
    }

    componentDidMount() {
        axios
            .get<Time>('./time')
            .then((res) => {
                this.setState({ time: res.data.time });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return <h1>TIME: {this.state.time}</h1>;
    }
}

export default Test;

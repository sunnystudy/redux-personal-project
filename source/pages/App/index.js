// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Catcher from "../../components/Catcher";
import Spinner from "../../components/Spinner";
import Scheduler from "../../components/Scheduler";

@hot(module)
export default class App extends Component {
    render () {
        return (
            <Catcher>
                <Spinner/>
                <Scheduler/>
            </Catcher>
        );
    }
}

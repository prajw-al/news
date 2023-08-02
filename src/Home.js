import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import News from './News';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
        }
    }
    handleClick(event) {
        console.log("Working Button");
        console.log(this.state.search);
        event.preventDefault();
        this.setState({ search: '' })
    }
    render() {
        return (
            <div>
                <Nav />
                <News />
            </div>
        );
    }
}

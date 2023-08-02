import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './images/hamburger.png'
import Hamburger1 from './images/hamburger1.png'
import './App.css';
export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
        }
    }
    handleCilck(event) {
        console.log("click 1 working");
        event.preventDefault();
        this.setState({
            redirect: true,
        })
    }
    handleCilck1(event) {
        console.log("click 2 working");
        event.preventDefault();
        this.setState({
            redirect: false,
        })
    }
    render() {
        const { redirect } = this.state;
        return (
            <div>
                {
                    redirect === false ?
                        <div className="subContainer">
                            <button className="button" onClick={this.handleCilck.bind(this)}><img src={Hamburger} alt="imageHam" className="image1" /></button>
                            <ul className="link">
                                <Link to="/" className="link1"><li className="text"><b className="text">GET</b><span className="bold">NEWS</span></li></Link>
                            </ul>
                            <ul className="links">
                                <li><Link to="/sports" className="link7">Sports</Link></li>
                                <li><Link to="/business" className="link7">Business</Link></li>
                                <li><Link to="/entertainment" className="link7">Entertainment</Link></li>
                                <li><Link to="/health" className="link7">Health</Link></li>
                                <li><Link to="/science" className="link7">Science</Link></li>
                                <li><Link to="/technology" className="link7">Technology</Link></li>
                            </ul>
                            <div className="subContainer1" >
                                <input type="text" className="searchBar" name="search"
                                    placeholder="Search News" value={this.state.search}
                                    onChange={event => this.setState({ search: event.target.value })} />
                                <Link to="/search" >
                                    <button className="btn">Search</button>
                                </Link>
                            </div>
                        </div>
                        : <div className="subContainer12">
                            <div className="header1">
                                <button className="button1" onClick={this.handleCilck1.bind(this)}><img src={Hamburger1} alt="imageHam1" className="image2" /></button>
                                <ul className="link">
                                    <Link to="/" className="link1"><li className="text1"><b className="text">GET</b><span className="bold">NEWS</span></li></Link>
                                </ul>
                            </div>
                            <div className="linksss">
                                <div className="subContainer3" >
                                    <input type="text" className="searchBarr" name="search"
                                        placeholder="Search News" value={this.state.search}
                                        onChange={event => this.setState({ search: event.target.value })} />
                                    <Link to="/search">
                                        <button className="btnn" >Search</button>
                                    </Link>
                                </div>
                                <ul className="linkss">
                                    <li className="list"><Link to="/sports" className="link8">Sports</Link></li>
                                    <li className="list"><Link to="/business" className="link8">Business</Link></li>
                                    <li className="list"><Link to="/entertainment" className="link8">Entertainment</Link></li>
                                    <li className="list"><Link to="/health" className="link8">Health</Link></li>
                                    <li className="list"><Link to="/science" className="link8">Science</Link></li>
                                    <li className="list"><Link to="/technology" className="link8">Technology</Link></li>
                                </ul>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

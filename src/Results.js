import React, { Component } from 'react';
import Image from './images/image.jpg';
import { Link } from 'react-router-dom';
import Hamburger from './images/hamburger.png';
import Hamburger1 from './images/hamburger1.png';
import './App.css';
import axios from 'axios';
export default class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            search: '',
            redirect: false,
        }
    }
    handleClick(event) {
        console.log("Working Button");
        console.log(this.state.search);
        event.preventDefault();
        axios
            .get(`https://newsapi.org/v2/everything?q=${this.state.search}&apiKey=e437fae88b79463a9e002c894a55ac02`)
            .then(res => {
                const articles = res.data.articles;
                console.log(articles);
                this.setState({
                    articles: articles,
                    redirect: false,
                });
            })
            .catch(error => {
                console.log(error);
            });
        this.setState({ search: '' })
    }
    handleCilck(event) {
        console.log("working");
        event.preventDefault();
        this.setState({
            redirect: true,
        })
    }
    handleCilck1(event) {
        console.log("click3 working")
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
                        <div>
                            <div className="subContainer">
                                <button className="button" onClick={this.handleCilck.bind(this)}><img src={Hamburger} alt="imageHam" className="image1" /></button>
                                <ul className="link">
                                    <Link to="/" className="link1"><li className="text"><b className="text">GET</b><span className="bold">NEWS</span></li></Link>
                                </ul>
                                <ul className="links">
                                    <li className="list"><Link to="/sports" className="link8">Sports</Link></li>
                                    <li className="list"><Link to="/business" className="link8">Business</Link></li>
                                    <li className="list"><Link to="/entertainment" className="link8">Entertainment</Link></li>
                                    <li className="list"><Link to="/health" className="link8">Health</Link></li>
                                    <li className="list"><Link to="/science" className="link8">Science</Link></li>
                                    <li className="list"><Link to="/technology" className="link8">Technology</Link></li>
                                </ul>
                                <div className="subContainer1" >
                                    <input type="text" className="searchBar" name="search"
                                        placeholder="Search News" value={this.state.search}
                                        onChange={event => this.setState({ search: event.target.value })} />
                                    <Link to="/search">
                                        <button className="btn" onClick={this.handleClick.bind(this)}>Search</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card">
                                <div className="back">
                                </div>
                                {
                                    this.state.articles.map((news, id) =>
                                        // eslint-disable-next-line react/jsx-no-target-blank
                                        <a target="_blank" href={news.url} className="cardBody1" key={id} >
                                            <div className="title">{news.title}</div>
                                            <div className="cardBody" >
                                                <div className="container5">
                                                    <div>
                                                        {
                                                            news.urlToImage ? <img src={news.urlToImage} alt="newsImage" className="image" />
                                                                : <img src={Image} alt="newsImage" className="image" />
                                                        }
                                                    </div>
                                                    <p><label className="label">{news.publishedAt}</label></p>
                                                </div>
                                                <div className="container6">
                                                    {/* <span className="author">{news.author}</span> */}
                                                    <div>
                                                        {
                                                            news.author ? <span className="author">{news.author}</span>
                                                                : <span className="author">Not Available</span>
                                                        }
                                                    </div>
                                                    {/* <div className="content">{news.content}</div> */}
                                                    <div>
                                                        {
                                                            news.content ? <div className="content">{news.content}</div>
                                                                : <span className="content">Content not available click on it to know about the article</span>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                }
                            </div>
                        </div> :
                        <div className="subContainer12">
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
                                        <button className="btnn" onClick={this.handleClick.bind(this)} >Search</button>
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

            </div >
        )
    }
}

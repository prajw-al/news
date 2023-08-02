import React, { Component } from 'react';
import Image from './images/image.jpg';
import './App.css';
import axios from 'axios';
export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            news: [],
        }
    }

    componentDidMount() {
        this.getArticles();
        this.getArticles1();
    }
    getArticles(url) {
        axios
            .get(`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=e437fae88b79463a9e002c894a55ac02`)
            .then(res => {
                const articles = res.data.articles;
                // console.log(articles);
                this.setState({ articles: articles });
            })
            .catch(error => {
                console.log(error);
            });
    }
    getArticles1() {
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e437fae88b79463a9e002c894a55ac02`)
            .then(res => {
                const news = res.data.articles;
                // console.log(articles);
                this.setState({ news: news });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
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
                {
                    this.state.news.map((article, id) =>
                        // eslint-disable-next-line react/jsx-no-target-blank
                        <a target="_blank" href={article.url} className="cardBody1" key={id} >
                            <div className="title">{article.title}</div>
                            <div className="cardBody" >
                                <div className="container5">
                                    <div>
                                        {
                                            article.urlToImage ? <img src={article.urlToImage} alt="newsImage" className="image" />
                                                : <img src={Image} alt="newsImage" className="image" />
                                        }
                                    </div>
                                    <p><label className="label">{article.publishedAt}</label></p>
                                </div>
                                <div className="container6">
                                    {/* <span className="author">{article.author}</span> */}
                                    <div>
                                        {
                                            article.author ? <span className="author">{article.author}</span>
                                                : <span className="author">Not Available</span>
                                        }
                                    </div>
                                    {/* <div className="content">{article.content}</div> */}
                                    <div>
                                        {
                                            article.content ? <div className="content">{article.content}</div>
                                                : <span className="content">Content not available click on it to know about the article</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                }
            </div>

        )
    }
}

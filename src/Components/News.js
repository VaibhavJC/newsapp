import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

   static defaultProps = {
    country: 'in',
    page: 6,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    page: PropTypes.number,
    category: PropTypes.string,
  }


  constructor() {
    super();
    this.state = {
      newsArticle: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11fc6bdec96049ffb10672b70f99e6ee&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      newsArticle: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false
    });
  }

  handlePrevButton = async () => {
    window.scroll(0,0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11fc6bdec96049ffb10672b70f99e6ee&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      newsArticle: parsedData.articles,
      loading: false
    });
  }

  handleNextButton = async () => {
    
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11fc6bdec96049ffb10672b70f99e6ee&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        newsArticle: parsedData.articles,
        loading: false
      });
    
    window.scroll(0,0)
  }


  render() {
    return (
      <div className='container my-3'>
        <div className="row my-3 mx-5 ">
          <h2 className='text-center'>Top Headlines</h2>
          <h3 className='text-center text-success'><b>{this.props.category}</b></h3>
          {this.state.loading && <Spinner/>}
          {!this.state.loading && this.state.newsArticle.map((item) => {
            return <div className="col-md-4 my-4 d-flex justify-content-center" key={item.url}>
              <NewsItem title={item.title} description={item.description} newsUrl={item.url} imageUrl={item.urlToImage} date = {item.publishedAt} author = {item.author} source= {item.source.name}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevButton}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} type="button" className="btn btn-dark"  onClick={this.handleNextButton}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

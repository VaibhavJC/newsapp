import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import Newsgif from './Newsgif';
import InfiniteScroll from 'react-infinite-scroll-component'

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


  constructor(props) {
    super(props);
    this.state = {
      newsArticle: [],
      loading: true,
      page: 1,
      totalResult: 0
    }
    document.title = `${this.props.category}-TajaKhabar`
  }

  async newsUpdate() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      newsArticle: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.newsUpdate();
  }

  // handlePrevButton = async () => {
  //   window.scroll(0, 0);
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.newsUpdate();

  // }

  // handleNextButton = async () => {

  //   window.scroll(0, 0)
  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.newsUpdate();
  // }

  fetchMoreData = async() =>{
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      newsArticle: this.state.newsArticle.concat(parsedData.articles),
      totalResult: parsedData.totalResults,
      
    });
   
  }

  render() {
    return (
      <>
        
          <h2 className=' d-flex justify-content-center mt-5'><span><Newsgif /></span> Top Headlines <span><Newsgif /></span></h2>
          <h3 className='text-center text-success'><b>{this.props.category}</b></h3>

          {this.state.loading && <Spinner/>}

          <InfiniteScroll
            dataLength={this.state.newsArticle.length}
            next={this.fetchMoreData}
            hasMore={this.state.newsArticle.length !== this.state.totalResult}
            loader={<Spinner/>}
          >

           <div className="container">
           <div className="row  ">
           {this.state.newsArticle.map((item) => {
              return <div className="col-md-4 my-4 d-flex justify-content-center" key={item.url}>
                <NewsItem title={item.title} description={item.description} newsUrl={item.url} imageUrl={item.urlToImage} date={item.publishedAt} author={item.author} source={item.source.name} />
              </div>
            })}
           </div>
           </div>
          </InfiniteScroll>
      </>
    )
  }
}

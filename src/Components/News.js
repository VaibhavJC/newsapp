import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import Newsgif from './Newsgif';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

  const [newsArticle, setnewsArticle] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResult] = useState(0);

  const newsUpdate = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70);
    setnewsArticle(parsedData.articles)
    settotalResult(parsedData.totalResults)
    setloading(false);
    setPage(page + 1)

    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${props.category}-TajaKhabar`
    newsUpdate();
    //eslint-disable-next-line
  }, [])


  // handlePrevButton = async () => {
  //   window.scroll(0, 0);
  //  setPage(page+1)
  //   newsUpdate();
  // }

  // handleNextButton = async () => {

  //   window.scroll(0, 0)
  //   setPage(page+1);
  //   newsUpdate();
  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setnewsArticle(parsedData.articles)
    settotalResult(parsedData.totalResults)
    setnewsArticle(newsArticle.concat(parsedData.articles))

  }

  return (
    <>

      <h2 className=' d-flex justify-content-center' style={{ marginTop: "4rem" }}><span><Newsgif /></span> Top Headlines <span><Newsgif /></span></h2>
      <h3 className='text-center text-success'><b>{props.category}</b></h3>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={newsArticle.length}
        next={fetchMoreData}
        hasMore={newsArticle.length !== totalResults}
        loader={<Spinner />}

      >

        <div className="container">
          <div className="row ">
            {newsArticle.map((item) => {
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

News.defaultProps = {
  country: 'in',
  page: 1,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  page: PropTypes.number,
  category: PropTypes.string,
}

export default News;
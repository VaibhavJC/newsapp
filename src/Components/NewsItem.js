import React from 'react'

const NewsItem = (props) => {


  let { title, description, imageUrl, newsUrl, date, author, source } = props;
  return (
    <div>
      <div className="card">
        <img src={!imageUrl ? "https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/newspaper.png" : imageUrl} className="card-img-top" alt="..." />
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', left: '50%' }}>
          {!source ? 'Unkonwn' : source}
        </span>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p><small><b>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</b></small></p>
          <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem;

//import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem = (props) => {
    

    let {title, description,imageUrl, newsUrl, author, date,source} =props;
    return (
       <div className='my-3'>
      
                    <div className="card">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}
              
              </span>
            <img src={!imageUrl?"":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <small className="text-danger">By {!author?"Unknown":author} on {date}</small>
                <a href={newsUrl} rel="_blank" className="btn btn-sm btn-light">Read More</a>
            </div>
            </div>
            </div>
      
    )

}

export default NewsItem

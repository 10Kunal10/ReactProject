import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import Spinner from './Spinner'
import PropTypes from 'prop-types'
//import InfiniteScroll from "react-infinite-scroll-component";



export class news extends Component {
    
  static defaultProps ={
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }


    constructor(){
        super();
        console.log("Hello i am a constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page:1,
            totalResults: 0

        }

    }

      async updateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=711e7ea93ed2444ca8a34685569687ab&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
      

    }

    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=711e7ea93ed2444ca8a34685569687ab&page=1&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    
    }

    handlePrevClick=async()=>{
      this.setState({page:this.state.page - 1});
      this.updateNews();
   


    }

     handleNextClick=async()=>{
      console.log("next");
      this.setState({page:this.state.page + 1})
      this.updateNews();

    }
  
  


  render() {

    return (
      <div className='container my-3'>
        
        <h2 className='text-center' style={{margin:'40px 0px',marginTop:'90px'}}> Top Headlines from {this.props.category}</h2>
        



        <div className='container'>  
        <div className='row'>
        {this.state.articles.map((element)=>{
           return <div className='col-md-4'key={element.url}>
           <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage}  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
         </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
       <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        </div> 
        </div>
      
    )
  }
}

export default news

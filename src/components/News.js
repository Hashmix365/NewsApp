import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
export class News extends Component {
  
  constructor(){
    super();
    console.log('hello I am a constructer from newsjs');
    this.state = {
      articles:[ ],
      loading : false,
      page :1
    }
    
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56a4b19c5c7b47c7bb07019f2cfae18b&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
      })  
  }
  handleprevclick=async()=>{
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56a4b19c5c7b47c7bb07019f2cfae18b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()  
    this.setState({
      page:this.state.page - 1 ,
      articles:parsedData.articles,
      loading:false
    })

  }
  handlenextclick=async()=>{
    if (!(this.state.page +1  >  Math.ceil(this.state.totalResults/this.props.pageSize))){let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56a4b19c5c7b47c7bb07019f2cfae18b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
   console.log("next")
    let data = await fetch(url);
    let parsedData = await data.json() 
    this.setState({
      page:this.state.page + 1 ,
      articles:parsedData.articles,
      loading:false
    })}

  }
  render() {
    return (
        <div className="container my-3">
          <h1 className="text-center">NEWZIFY-Top Headlines</h1>
          {this.state.loading && <Spinner/>}
          < div className="row ">
          {!this.state.loading && this.state.articles.map((element)=>{ 
            return < div className="col-md-4 my-3 d-flex justify-content-around" key={element.url}>
            <Newsitem  title={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,90):" "} newsurl={element.url} imgurl= {element.urlToImage}/>
            </div>
          })}
          </div>
          <div className="container my-3 d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
          <button type="button" disabled={(this.state.page +1  >  Math.ceil(this.state.totalResults/this.props.pageSize))} className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
          </div>
        </div>
      
    )
  }
}

export default News 

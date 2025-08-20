import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imgurl,newsurl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={imgurl = !imgurl
    ? "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg"
    : imgurl === "https://images.ladbible.com/ogimage/v3/assets/blt949ea8e16e463049/blt277f4fba41a54a03/68972af49ec9845a487e2f2e/cruise-ship-responds-accident.png"
        ? null
        : imgurl
} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer"  href={newsurl} target= "_blank" className="btn btn-sm btn-dark">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem

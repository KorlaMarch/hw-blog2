import React from 'react';

export default class ShortPost extends React.Component{
  render(){
    return (
      <article className="row">
        <div className="col">
          <a href={ "post/" + this.props.post._id }><h3 className="row">{this.props.post.topic}</h3></a>
          <h6 className="row">By {this.props.post.ownerName} on {this.props.post.createdAt.toString()}</h6>
          <p className="row">
            {this.props.post.content}
          </p>
        </div>
      </article>
    );
  }
}

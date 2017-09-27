import React from "react";
import { Meteor } from "meteor/meteor";

export default class CreatePost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      topic : "",
      content : ""
    }

    this.handleTopicChange = this.handleTopicChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTopicChange(event){
    this.setState({topic : event.target.value});
  }

  handleContentChange(event){
    this.setState({content : event.target.value});
  }

  handleSubmit(event){
    Meteor.call('posts.insert', this.state.topic, this.state.content, 0);
  }

  render(){
    return (
      <div>
        <h1>Create New Post</h1>
        <form onSubmit={this.handleSubmit} >
          <input type="text" className="form-control form-group" id="topic-input" placeholder="Topic..."
            value={this.state.topic} onChange={this.handleTopicChange} />
          <textarea className="form-group form-control" rows="20" placeholder="Write Contents Here..."
            value={this.state.content} onChange={this.handleContentChange} />
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

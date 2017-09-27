import { Meteor } from 'meteor/meteor'
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';
import BlogAside from './BlogAside.jsx'

class Post extends React.Component{
  render(){
    return (
      <div className="row">
        <div className="col">
          <h3 className="row">{ this.props.post.topic }</h3>
          <h6 className="row">By March on 9/24/2017</h6>
          <p className="row">
            { this.props.post.content }
          </p>
        </div>
        <BlogAside />
      </div>
    )
  }
}

export default withTracker( ({ id }) => {
    Meteor.subscribe('posts');
    return {
      post : Post.findOne({_id : id})
    };
})(Post);

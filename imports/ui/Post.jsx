import { Meteor } from 'meteor/meteor'
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';
import BlogAside from './BlogAside.jsx'

class Post extends React.Component{
  render(){
    return (
      <div className="row">
        {this.props.post &&
          <div className="col">
            <h3 className="row">{ this.props.post.topic }</h3>
            <h6 className="row">By {this.props.post.ownerName} on {this.props.post.createdAt.toString()}</h6>
            <p className="row">
              { this.props.post.content }
            </p>
          </div>
        }
        <BlogAside />
      </div>
    )
  }
}

export default withTracker( ({ id }) => {
    Meteor.subscribe('posts');
    return {
      post : Posts.findOne({_id : id})
    };
})(Post);

import React from 'react';
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';

class BlogAside extends React.Component{
  render(){
    var linkList = this.props.posts.map( (post) => (
      <a href={ "/post/"+post._id } key={post._id}>
        <li>
          {post.topic}
        </li>
      </a>
    ));
    return (
      <aside className="col-3">
        <h3>New Articles</h3>
        <ul>
          {linkList}
        </ul>
      </aside>
    )
  }
}

export default withTracker( () => {
  Meteor.subscribe('posts');
  return{
    posts: Posts.find({},{topic : 1}).fetch()
  };
})(BlogAside);

import { Meteor } from 'meteor/meteor'
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Posts } from '../api/posts.js';

import BlogAside from './BlogAside.jsx';
import ShortPost from './ShortPost.jsx';

class Page extends React.Component{
  render(){
    var list = this.props.posts.map( (post) => (
       <ShortPost key={post._id} post={post} />
    ));
    return (
      <div className="row">
        <div className="col">
          {list}
        </div>
        <BlogAside />
      </div>
    )
  }
}

export default withTracker( () => {
  Meteor.subscribe('posts');

  return{
    posts: Posts.find({}).fetch()
  };
})(Page);

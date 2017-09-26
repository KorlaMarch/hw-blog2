import React from 'react';

import BlogAside from './BlogAside.jsx';
import ShortPost from './ShortPost.jsx';

export default class Page extends React.Component{
  render(){
    return (
      <div className="row">
        <div className="col">
          <ShortPost />
          <ShortPost />
        </div>
        <BlogAside />
      </div>
    )
  }
}

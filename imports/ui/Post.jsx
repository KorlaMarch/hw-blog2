import React from 'react';

import BlogAside from './BlogAside.jsx'

export default class Post extends React.Component{
  render(){
    return (
      <div className="row">
        <div className="col">
          <h3 className="row">This is blog title</h3>
          <h6 className="row">By March on 9/24/2017</h6>
          <p className="row">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <BlogAside />
      </div>
    )
  }
}

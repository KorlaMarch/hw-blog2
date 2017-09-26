import React from 'react';

export default class BlogHeader extends React.Component{
  render(){
    return (
      <nav class="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <a href="#" class="navbar-brand">March's Blog</a>
        <div class="navbar-nav">
          <a href="#" class="nav-item nav-link">Create</a>
          <a href="#" class="nav-item nav-link">About</a>
        </div>
      </nav>
    );
  }
}

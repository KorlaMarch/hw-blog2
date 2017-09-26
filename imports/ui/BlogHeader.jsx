import React from 'react';

export default class BlogHeader extends React.Component{
  render(){
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <a href="#" className="navbar-brand">March's Blog</a>
        <div className="navbar-nav">
          <a href="#" className="nav-item nav-link">Create</a>
          <a href="#" className="nav-item nav-link">About</a>
        </div>
      </nav>
    );
  }
}

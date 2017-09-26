import React from 'react';

import BlogHeader from './BlogHeader.jsx'
import BlogFooter from './BlogFooter.jsx';


export default class App extends React.Component{
  render(){
    console.log(this.props.children);
    return (
      <div>
        <BlogHeader />
        <main className="container">
          {this.props.children}
        </main>
        <BlogFooter />
        </div>
    );
  }
}

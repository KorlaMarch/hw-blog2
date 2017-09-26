import React from 'react';

export default class CreatePost extends React.Component{

  render(){
    return (
      <div>
        <h1>Create New Post</h1>
        <form>
          <input type="text" className="form-control form-group" id="topic-input" placeholder="Topic..." />
          <textarea className="form-group form-control" rows="20" placeholder="Write Contents Here..."></textarea>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

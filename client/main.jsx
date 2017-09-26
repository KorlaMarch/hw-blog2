import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { FlowRouter }  from 'meteor/kadira:flow-router';

// import './main.html';
import App from '../imports/ui/App.jsx';
import Page from '../imports/ui/Page.jsx';
import CreatePost from '../imports/ui/CreatePost.jsx';
import Post from '../imports/ui/Post.jsx';

FlowRouter.route('/', {
  name: 'Blog.Page',
  action() {
    const root = document.getElementById('root');
    if(root){
      ReactDOM.render(<App><Page /></App>,root);
    }
  }
});

FlowRouter.route('/new', {
  name: 'Blog.Create',
  action() {
    const root = document.getElementById('root');
    if(root){
      ReactDOM.render(<App><CreatePost /></App>,root);
    }
  }
});

FlowRouter.route('/post', {
  name: 'Blog.Post',
  action() {
    const root = document.getElementById('root');
    if(root){
      ReactDOM.render(<App><Post /></App>,root);
    }
  }
});

Meteor.startup( () => {
  const routeName = FlowRouter.getRouteName();
  const root = document.getElementById('root');
  if(routeName=='Blog.Page'){
    ReactDOM.render(<App><Page /></App>,root);
  }else if(routeName=='Blog.Create'){
    ReactDOM.render(<App><CreatePost /></App>,root);
  }else if(routeName=='Blog.Post'){
    ReactDOM.render(<App><Post /></App>,root);
  }
});

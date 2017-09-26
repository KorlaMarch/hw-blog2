import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { FlowRouter }  from 'meteor/kadira:flow-router';

import './main.html';
import App from '../imports/ui/App.jsx';
//
// FlowRouter.route('/new/', {
//   name: 'Blog.Create',
//   action() {
//     const root = document.getElementById('root');
//     if(root){
//       ReactDOM.render(<App />, root);
//     }
//   }
// });
//
// Meteor.startup( () => {
//   const routeName = FlowRouter.getRouteName();
//   const root = document.getElementById('root');
//   if(routeName=='Blog.List'){
//     ReactDOM.render(<App />, root);
//   }
// });

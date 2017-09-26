import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { check } from "meteor/check";

export const Posts = new Mongo.Collection("posts");

//Database schema
Post.schema = new SimpleSchema({
  topic : {type : String},
  content : {type : String},
  ownerName : {type : String, defaultValue : "Anonymous"},
  ownerID : {type : Number},
  createdAt: {type : Date},
});
Post.attachSchema(Post.schema);

//Database publish
if(Meteor.isServer()){
  Meteor.publish('posts', function postsPublication(){
    return Posts.find({});
  });
}

//Database methods
Meteor.methods({
  'posts.insert'(topic,content,ownerID){
    check(topic, String);
    check(content, String);
    check(ownerID, Number);

    Posts.insert(
      topic,
      content,
      ownerID,
      createdAt : new Date()
    );
  }
})

import { Meteor } from 'meteor/meteor';
import {Pics} from '../collections/pics.js';

Meteor.startup(() => {
  Meteor.publish('pics', function(pageNum) {
    console.log(pageNum);
    return Pics.find({}, {sort :{up : -1}, limit : pageNum});
  });
})

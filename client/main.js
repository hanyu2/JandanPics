import React from 'react';
import ReactDOM from 'react-dom';
import PicList from './picList.js';

Meteor.startup(() =>{
  ReactDOM.render(<PicList />, document.querySelector(".render-target"))
})

import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Pics} from '../collections/pics.js';

class PicList extends Component{
  componentWillMount(){
    this.page = 1;
  }
  componentDidMount(){
    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
         console.log("down")
         Meteor.subscribe('pics', 10*(this.page + 1));
         this.page += 1;
         console.log(this.page);
       }
    }.bind(this));

  }

  render(){
    return (
      <div>
        {this.props.pics.map(pic => {
          return (
            <div key={pic._id} className="thumbnail center">
              <img src={pic.imgurl} alt="show"/>
              oo:{pic.up} xx{pic.down}
              <hr/>
            </div>
          )
        })}
      </div>

    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('pics', 10)
  return {pics: Pics.find({}).fetch() };
}, PicList);

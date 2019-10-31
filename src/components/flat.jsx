import React, { Component } from 'react';

class Flat extends Component {

  render() {

  	return(
  		<div className="card-trip">
		  <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg" />
		  <div className="card-trip-infos">
		    <div>
		      <h2>Title here</h2>
		      <p>Short description here!</p>
		    </div>
		    <h2 className="card-trip-pricing">£99.99</h2>
		    <img src="https://kitt.lewagon.com/placeholder/users/krokrob" className="card-trip-user avatar-bordered" />
		  </div>
		</div>

	);
  }
}

export default Flat;
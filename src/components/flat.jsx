import React, { Component } from 'react';

class Flat extends Component {

  render() {

  	return(

  		<div className="card-trip">
		  <img src={this.props.flat.imageUrl} />
		  <div className="card-trip-infos">
		    <div>
		      <h4>{this.props.flat.name}</h4>
		    </div>
		    <h5 className="card-trip-pricing">{this.props.flat.price}</h5>
		  </div>
		</div>

	);
  }
}

export default Flat;
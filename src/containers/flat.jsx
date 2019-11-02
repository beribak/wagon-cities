import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectFlat } from '../actions';

class Flat extends Component {

  handleCLick = () => {
  	this.props.selectFlat(this.props.flat);
  }

  render() {

	let classes = "card-trip";
	if (this.props.flat === this.props.selectedFlat) {
		classes += " selected";
	}
  		
  	return(

  		<div className={classes} onClick={this.handleClick}>
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ selectFlat: selectFlat },
		dispatch
	);
}

function mapStateToProps(state) {
	return{
		selectedFlat: state.selectedFlat 
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
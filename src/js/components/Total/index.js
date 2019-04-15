import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class Total extends Component {
  constructor(props) {
    super(props);
  }
  render() {
		const moneyArray = this.props.payments.map((payment)=>{
				return payment.value;
		})
		const total = this.sum(moneyArray);
		return(
			<div className="row">
				<div className="col-xs-6"><h4>Current Total:</h4></div>
				<div className="col-xs-6"><h4>{total}</h4></div>
			</div>
		);
	}
	sum(arr) {
		return arr.reduce(function(prev, current, i, arr) {
        return prev+current;
    });
	}
}

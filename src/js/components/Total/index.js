import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import util from '../../util'

export class Total extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const moneyArray = this.props.payments.map((payment) => {
			return payment.value;
		});
		const total = util.sum(moneyArray);
		const totalCommaSeparated = util.commaSeparate(total);
		return (
			<div className="row">
				<div className="col-xs-7"><h4>Current Total:</h4></div>
				<div className="col-xs-5 text-right"><h4>{totalCommaSeparated}(JPY)</h4></div>
			</div>
		);
	}
}

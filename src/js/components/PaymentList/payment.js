import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import util from '../../util';

export class Payment extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const displayCost = util.commaSeparate(this.props.value)
		return (
			<div className="row" id={this.props.id}>
				<div className="col-xs-4">{this.props.name}</div>
				<div className="col-xs-4 text-right">{displayCost}</div>
				<div className="col-xs-4">{this.props.payed_at}</div>
			</div>
		);
	}
}

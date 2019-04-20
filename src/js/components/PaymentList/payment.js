import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import util from '../../util';

export class Payment extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const displayCost = util.commaSeparate(this.props.value);
		const displayCash = util.commaSeparate(this.props.cash);
		return (
			<div className="list-group-item">
				<div className="row" id={this.props.id}>
					<div className="col-xs-6 col-sm-2">{this.props.payed_at}</div>
					<div className="col-xs-6 col-sm-2 text-right pull-right" >
						{displayCash}
					</div>
					<div className="col-xs-6 col-sm-2 text-right pull-right" style={this.valueStyle()}>
						{displayCost}
					</div>
					
					<div className="col-xs-6 col-sm-6">{this.props.name}</div>
				</div>
			</div>
		);
	}
	valueStyle() {
		return {
			color: (this.props.value < 0) ? '#f00' : '',
		}
	}
}

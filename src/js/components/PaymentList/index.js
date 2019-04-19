import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Payment } from './payment';

export class PaymentList extends Component {
	constructor(props) {
		super(props);
	}
	render() {

		if (this.props.payments === null) {
			return (
				<div>
					入出金情報がありません
					</div>
			)
		}
		return (
			<div>
				{this.props.payments.map((payment, i) => {
					return <Payment key={i}
						id={payment.id}
						value={payment.value}
						name={payment.name}
						payed_at={payment.payed_at}
					>
						list component here
				</Payment>;
				})}
			</div>
		);
	}
}

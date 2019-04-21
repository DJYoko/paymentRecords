import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Payment } from './payment';
import util from '../../util';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';

export class PaymentList extends Component {
	constructor(props) {
		super(props);
	}
	render() {

		if (this.props.payments === null) {
			return (
				<div>
					there are no payment records.
				</div>
			)
		}

		const sortedPayments = this.props.payments.sort(util.sortByPayedAt);
		let balance = 0;

		return (
			<div className="list-group">
				<div className="list-group-item header">
					<div className="row">
						<div className="col-xs-6 col-sm-2">Date</div>
						<div className="col-xs-6 col-sm-2 text-right pull-right" >
							Balance
						</div>
						<div className="col-xs-6 col-sm-2 text-right pull-right">
							Amount
						</div>
						<div className="col-xs-6 col-sm-6">Name</div>
					</div>
				</div>
				<div className="scroller">
					{sortedPayments.map((payment, i) => {
						balance = balance + payment.value;
						return <Payment key={i}
							id={payment.id}
							value={payment.value}
							name={payment.name}
							payed_at={payment.payed_at}
							balance={balance}
						></Payment>;
					})}
				</div>
				<style jsx>{styles}</style>
			</div>
		);
	}
}

const styles = css`
	.header{
		background-color: #eee;
		font-weight: bold;
	}
	.scroller{
		max-height: 400px;
		overflow-x:hidden;
	}
`;
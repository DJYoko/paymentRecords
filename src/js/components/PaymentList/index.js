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
					入出金情報がありません
				</div>
			)
		}
		const sortedPayents = this.props.payments.sort(this.sortByDate);
		const moneyArray = this.props.payments.map((payment) => {
			return payment.value;
		});
		const total = util.sum(moneyArray);
		let cash = total;

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
					{sortedPayents.map((payment, i) => {
						const beforeCash = cash;
						cash = cash - payment.value;
						return <Payment key={i}
							id={payment.id}
							value={payment.value}
							name={payment.name}
							payed_at={payment.payed_at}
							cash={beforeCash}
						></Payment>;
					})}
				</div>
				<style jsx>{styles}</style>
			</div>
		);
	}
	sortByDate(a, b) {
		return new Date(b.payed_at) - new Date(a.payed_at);
	}
}

const styles = css`
	.header{
		background-color: #eee;
		font-weight: bold;
	}
	.scroller{
		height: 400px;
		overflow-x:hidden;
	}
`;
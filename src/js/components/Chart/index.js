import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import util from '../../util';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import { Line } from 'react-chartjs';

const chartDataWrapper = {
	labels: [/* dates set*/],
	datasets: [
		{
			fill: false,
			pointHoverRadius: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [/* balance set*/],
			spanGaps: false,
		}
	]
};

const options = {
	maintainAspectRatio: false,
	responsive: true,
};

export class Chart extends Component {
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
		const sortedPayments = this.props.payments.sort(this.sortByDate);

		const dateFirst = sortedPayments[0].payed_at;
		const dateLast = sortedPayments[sortedPayments.length - 1].payed_at;

		console.log(dateFirst, dateLast);

		// TODO create array of whole dates of the term => use as chartData.label

		// TODO calc balance of each date in whole dates of the term  => use as chartData.datasets.data

		const chartData = chartDataWrapper;
		chartData.label = [];
		chartData.datasets.data = [];

		return (
			<div className="chart-wrapper">
				<Line data={chartData} options={options} width="100%" height="250" />
				<style jsx>{styles}</style>
			</div>
		);
	}
	sortByDate(a, b) {
		return new Date(a.payed_at) - new Date(b.payed_at);
	}
	cashFlow(date, cash) {
		return {
			date: date,
			cash: cash,
		}
	}
}

const styles = css`
	.chart-wrapper {
		min-height: 60px;
		border: 1px solid #cccccc;
	}
`;
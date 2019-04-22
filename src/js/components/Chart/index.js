import React, { Component } from 'react';
import util from '../../util';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';
import { Line } from 'react-chartjs';
import moment from 'moment';

const chartDataWrapper = {
	labels: [/* dates set*/],
	datasets: [
		{
			fillColor: ['rgba(0,0,255,0.1)'],
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
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero: true
			}
		}]
	},
	tooltipTemplate: '<%= value  %>',
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

		const sortedPayments = this.props.payments.sort(util.sortByPayedAt);
		const dateFirst = sortedPayments[0].payed_at;
		const dateLast = sortedPayments[sortedPayments.length - 1].payed_at;
		const allDates = this.getAllDatesInTerm(new Date(dateFirst), new Date(dateLast));
		const allBalances = this.getAllBalanceInTerm(allDates, sortedPayments);

		const chartData = chartDataWrapper;
		chartData.labels = allDates;
		chartData.datasets[0].data = allBalances;

		return (
			<div className="chart-wrapper">
				<h3>Cash Flow</h3>
				<Line data={chartData} options={options} width="100%" height="250" />
				<style jsx>{styles}</style>
			</div>
		);
	}
	cashFlow(date, cash) {
		return {
			date: date,
			cash: cash,
		}
	}
	getAllDatesInTerm(startDatetimeObject, lastDatetimeObject) {
		const allDates = [];
		const lastDate = moment(lastDatetimeObject);
		let countDate = moment(startDatetimeObject);
		while (!moment(countDate).isSame(lastDate)) {
			allDates.push(moment(countDate).format('YYYY-MM-DD'));
			countDate = countDate.add('days', 1);
		}
		allDates.push(moment(lastDatetimeObject).format('YYYY-MM-DD'));
		return allDates;
	}
	getAllBalanceInTerm(allDates, payments) {
		const allBalances = [];
		let currentBalance = 0;
		allDates.forEach(date => {
			payments.forEach(payment => {
				if (date === payment.payed_at) {
					currentBalance += payment.value;
				}
			});
			allBalances.push(currentBalance);
		});
		return allBalances;
	}
}

const styles = css`
	.chart-wrapper {
		min-height: 60px;
		border: 1px solid #dddddd;
		padding: 16px;
		border-radius: 4px;
		margin-bottom: 20px;
	}
	h3 {
		margin-top: 0;
	}
`;
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import store from './store';
import { addPayment } from './actions/';
import { PaymentList } from './components/PaymentList';
import { Register } from './components/Register';
import { Total } from './components/Total';

export class Container extends React.Component {
	constructor(props) {
		super(props);
		this.onRegisterClick = this.onRegisterClick.bind(this);
	}
	render() {
		const _state = store.getState();

		return (
			<div>
				<Register onRegisterClick={this.onRegisterClick} />
				<Total payments={_state} />
				<PaymentList payments={_state} />
			</div>
		);
	}
	filterByTimestamp(payments, start, end) {
		return arr.map(function (payment) {
			return start <= payment.payed_at && payment.payed_at <= end;
		});
	}
	onRegisterClick(payload) {
		const sendData = payload;
		sendData.value = parseInt(sendData.value);
		store.dispatch(addPayment(payload));
	}
}

const renderRoot = Component => {
	ReactDOM.render(
		<Component />,
		document.getElementById('app')
	);
};

// init render
renderRoot(Container);

// refresh
store.subscribe(() => renderRoot(Container));

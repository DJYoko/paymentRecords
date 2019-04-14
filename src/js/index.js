import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import store from './store';
import {PaymentList} from './components/PaymentList';
import {Register} from './components/Register';

export class Container extends React.Component {
  constructor(props) {
    super(props);
		this.onRegisterClick = this.onRegisterClick.bind(this);
  }
  render() {
		const _state = store.getState();
		const moneyArray = _state.payments.map((payment)=>{
				return payment.value;
		})
		const total = this.sum(moneyArray);
    return (
			<div>
				<div className="row">
					<div className="col-xs-6"><h4>Current Total:</h4></div>
					<div className="col-xs-6"><h4>{total}</h4></div>
				</div>
				<Register onRegisterClick={this.onRegisterClick} />
				<PaymentList payments={_state.payments} />
			</div>
    );
  }
	filterByTimestamp(payments, start, end) {
		return arr.map(function(payment) {
				return start <= payment.payed_at  && payment.payed_at <= end;
		});
	}
	sum(arr) {
		return arr.reduce(function(prev, current, i, arr) {
        return prev+current;
    });
	}
	onRegisterClick(payload) {
		console.log(payload);
		// call Action, dispatch
	}
}

ReactDOM.render(<Container />, document.getElementById('app'));

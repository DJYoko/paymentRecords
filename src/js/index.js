import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import store from './store'
import {PaymentList} from './components/PaymentList';

export class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
		const _state = store.getState();
		const moneyArray = _state.payments.map((payment)=>{
				return payment.value;
		})
		const total = this.sum(moneyArray);
    return (
			<div>
				root element here
				<PaymentList payments={_state.payments} />

				<div className="row">
					<div className="col-xs-6"><h2>Current Total Money:</h2></div>
					<div className="col-xs-6"><h2>{total}</h2></div>
				</div>
			</div>
    );
  }
	filterByTimestamp(payments, start, end) {
		return arr.map(function(payment) {
				return start < payment.payed_at  && payment.payed_at < end;
		});
	}
	sum(arr) {
		return arr.reduce(function(prev, current, i, arr) {
        return prev+current;
    });
	}
}

ReactDOM.render(<Container />, document.getElementById('app'));

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
    return (
			<div>
				root element here
				<PaymentList payments={_state.payments} />
			</div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('app'));

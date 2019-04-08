import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { createStore } from 'redux'
import {PaymentList} from './components/PaymentList';
// import payments from './reducers/'

const rootElement = document.getElementById('app');
// const store = createStore(payments)

export class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
			<div>
				root element here
				<PaymentList />
			</div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('app'));

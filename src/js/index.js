import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import store from './store'
import {PaymentList} from './components/PaymentList';


const rootElement = document.getElementById('app');

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

import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
		return(
			<div className="row">
		  		<div className="col-sm-3"><input className="form-control" type="text" name="name" placeholder="ex: income" /></div>
		  		<div className="col-sm-3">
					<div className="input-group"><input className="form-control" type="text" name="value" placeholder="ex: 10000" />
					<span className="input-group-addon">円</span></div></div>
		  		<div className="col-sm-3"><input className="form-control" type="datetime-local" name="payed_at" placeholder="ex: 2019:01:01" /></div>
					<div className="col-sm-3">
						<button className="btn btn-primary">追加</button>
					</div>
		  </div>
		);
	}
}

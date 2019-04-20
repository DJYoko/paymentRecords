import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _JSXStyle from 'styled-jsx/style';
import css from 'styled-jsx/css';

export class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			value: '',
			payed_at: '',
		};
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeValue = this.onChangeValue.bind(this);
		this.onChangePayedAt = this.onChangePayedAt.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	render() {
		return (
			<div className="register">				
				<div className="row">
					<div className="col-sm-3">
						<input className="form-control" type="text" name="name" placeholder="name" onChange={this.onChangeName} />
					</div>
					<div className="col-sm-3">
						<div className="input-group"><input className="form-control" type="number" name="value" placeholder="ex: 10000" onChange={this.onChangeValue} />
							<span className="input-group-addon">円</span>
						</div>
					</div>
					<div className="col-sm-3">
						<input className="form-control" type="date" name="payed_at" placeholder="ex: 2019/01/01" onChange={this.onChangePayedAt} />
					</div>
					<div className="col-sm-3">
						<button className="btn btn-primary" onClick={this.onClick}>保存</button>
					</div>
				</div>
				<style jsx>{ styles }</style>
			</div>
		);
	}
	onClick() {
		const payload = {
			name: this.state.name,
			value: this.state.value,
			payed_at: this.state.payed_at,
		};
		this.props.onRegisterClick(payload);
	}

	onChangeName(event) {
		this.state.name = event.currentTarget.value;
	}

	onChangeValue(event) {
		this.state.value = event.currentTarget.value;
	}

	onChangePayedAt(event) {
		this.state.payed_at = event.currentTarget.value;
	}

}

const styles = css`
	.register {
		background-color: #eeeeee;
		padding: 12px;
		margin-bottom: 20px;
	}
`;
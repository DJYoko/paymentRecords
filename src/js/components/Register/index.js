import React, { Component } from 'react'
import _JSXStyle from 'styled-jsx/style'
import css from 'styled-jsx/css'

export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            value: '',
            payed_at: '',
        }
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeValue = this.onChangeValue.bind(this)
        this.onChangePayedAt = this.onChangePayedAt.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    render() {
        return (
            <div className="register">
                <h4>add income or expense</h4>
                <div className="row">
                    <div className="grid col-sm-3">
                        <input
                            ref="inputPayedAt"
                            className="form-control"
                            type="date"
                            name="payed_at"
                            placeholder="ex: 2019/01/01"
                            onChange={this.onChangePayedAt}
                        />
                    </div>
                    <div className="grid col-sm-4">
                        <input
                            ref="inputName"
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="name"
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="grid col-sm-3">
                        <div className="input-group">
                            <input
                                ref="inputValue"
                                className="form-control text-right"
                                type="number"
                                name="value"
                                placeholder="ex: 10000"
                                onChange={this.onChangeValue}
                            />
                            <span className="input-group-addon">JPY</span>
                        </div>
                    </div>

                    <div className="grid col-sm-2">
                        <button
                            className={'btn btn-primary btn-block ' + this.buttonStyle()}
                            onClick={this.onClick}
                            disabled={this.buttonDisabled()}
                        >
                            Save
                        </button>
                    </div>
                </div>
                <style jsx>{styles}</style>
            </div>
        )
    }

    onClick() {
        const payload = {
            name: this.state.name,
            value: this.state.value,
            payed_at: this.state.payed_at,
        }

        if (isFinite(this.state.value)) {
            payload.value = parseInt(payload.value)
        }

        this.props.onRegisterClick(payload)
        this.clearState()
    }

    onChangeName(event) {
        this.setState({
            name: event.currentTarget.value,
        })
    }

    onChangeValue(event) {
        this.setState({
            value: event.currentTarget.value,
        })
    }

    onChangePayedAt(event) {
        this.setState({
            payed_at: event.currentTarget.value,
        })
    }

    isSubmittable() {
        if (this.state.name === '') {
            return false
        }

        if (this.state.value === '') {
            return false
        }

        if (this.state.payed_at === '') {
            return false
        }

        return true
    }

    buttonStyle() {
        return this.isSubmittable() ? '' : ' disabled'
    }

    buttonDisabled() {
        return this.isSubmittable() ? false : true
    }

    clearState() {
        this.setState({
            name: '',
            value: '',
            payed_at: '',
        })
        this.refs.inputName.value = ''
        this.refs.inputValue.value = ''
        this.refs.inputPayedAt.value = ''
    }
}

const styles = css`
    .register {
        background-color: #eeeeee;
        border: 1px solid #dddddd;
        padding: 12px 12px 0;
        margin-bottom: 20px;
        border-radius: 4px;
    }
    .grid {
        padding-bottom: 12px;
    }
`

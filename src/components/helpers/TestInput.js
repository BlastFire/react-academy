import React, { Component } from 'react'

export default class TestInput extends Component {
    render() {
        const { input: { value, onChange } } = this.props
        return (
            <div>
                <span>The current value is {value}.</span>
                <button type="button" onClick={() => onChange(value + 1)}>Inc</button>
                <button type="button" onClick={() => onChange(value - 1)}>Dec</button>
            </div>
        )
    }
}
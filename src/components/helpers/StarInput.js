import React, { Component } from 'react'
import ReactStars from 'react-stars'

export class StarInput extends Component {

    render() {
        const { input: { onChange } } = this.props
        return (
            <ReactStars
                count={5}
                size={24}
                onChange={e => onChange(e)}
                color2={'#ffd700'} />
        )
    }
}
import React, { Component } from 'react'
import './css/ToggleFlip.css'

class ToggleFlip extends Component {

    static defaultProps = { on: false, onToggle: () => { } }
    state = { on: this.props.on, vtext: this.props.vtext, itext: this.props.itext }

    toggle = (e) => {
        e.stopPropagation()
        this.setState(
            ({ on }) => ({ on: !on }),
            () => {
                this.props.onToggle(this.state.on)
            }
        )
    }

    render() {
        return (
            <ToggleFlipSwitch {...this.state} className={this.props.className} onClick={(this.toggle)} />
        )
    }
}

const ToggleFlipSwitch = ({ on, className, ...props }) => {
    const vtext = props.vtext || 'on'
    const itext = props.itext || 'off'
    return (
        <div className={`tgl-cont ${className}`}>
            <input className="tgl tgl-flip" type="checkbox" checked={on} readOnly />
            <label {...props} className="tgl-btn" data-tg-off={itext} data-tg-on={vtext} ></label>
        </div>
    )
}

export default ToggleFlip
import React, { Component } from 'react'
import './css/TestComp.css'
import ToggleLight from './UIComponents/ToggleLight'

class TestComp extends Component {

    state = { on: false }

    toggle = () => {
        this.setState(
            ({ on }) => ({ on: !on }),
            () => {
                console.log(this.state.on)
            }
        )
    }

    render() {
        return (
            <TestSwitch on={this.state.on} onClick={this.toggle} />
        )
    }
}
export default TestComp

const TestSwitch = ({ on, onToggle, ...props }) => (
    <div className='tcwrapper'>
        <input className='tc-input' type='checkbox' />
        <button {...props} className={`tc-btn ${on ? 'tc-btn-on' : 'tc-btn-off'}`} />
    </div>
)
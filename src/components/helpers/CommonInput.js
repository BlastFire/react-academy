import React from 'react'
import { Input } from 'reactstrap'

// const adaptFileEventToValue = delegate =>
//     e => delegate(e.target.files[0])

export const CommonInput = ({ type, textarea, input: { value, onChange, onBlur }, meta: { touched, error }, ...props }) => {

    //for file input, browsers doesnt like to assign default value, so we clearing it
    if (type === 'file') value = undefined
    const textareaType = <textarea onChange={onChange} onBlur={onBlur} value={value} type={type} {...props} />
    const inputType = <Input onChange={onChange} onBlur={onBlur} type={type} value={value} {...props} />
    const errorType = touched && (error && <span>{error}</span>)

    if (textarea) {
        return (
            <div>
                {textareaType}
                <br />
                {errorType}
            </div>
        )
    }

    return (
        <div>
            {inputType}
            {errorType}
        </div>
    )
}
import React from 'react'
import { Input } from 'reactstrap'

// const adaptFileEventToValue = delegate =>
//     e => delegate(e.target.files[0])

export const CommonInput = ({ type, textarea, input, meta: { touched, error }, ...props }) => {

    const textareaType = <textarea onChange={input.onChange} onBlur={input.onBlur} type={type} {...props} />
    const inputType = <Input onChange={input.onChange} onBlur={input.onBlur} type={type} {...props} />
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
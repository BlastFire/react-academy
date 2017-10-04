import React from 'react'
import { Input } from 'reactstrap'

// const adaptFileEventToValue = delegate =>
//     e => delegate(e.target.files[0])

export const CommonInput = ({ type, input: { value: omitValue, onChange, onBlur, ...inputProps, }, meta: { touched, error } }) => {
    return (
        <div>
            <Input
                onChange={onChange}
                onBlur={onBlur}
                type={type}
                {...inputProps}
            />
            {
                touched && (error && <span>{error}</span>)
            }
        </div>
    )
}

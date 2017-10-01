import React from 'react'
import { Input } from 'reactstrap'

// const adaptFileEventToValue = delegate =>
//     e => delegate(e.target.files[0])

export const CommonInput = ({ type, input: { value: omitValue, onChange, onBlur, ...inputProps, }, meta: omitMeta, ...props }) => (
    <Input
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        {...inputProps}
        {...props}
    />
)

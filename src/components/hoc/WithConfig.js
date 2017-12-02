import React from 'react'
export const withConfig = overrides => Comp => props => (<Comp {...props} {...overrides} />)
import React from 'react'
import { Alert } from 'reactstrap'

const SimpleErrorComponent = ({ alert }) => (
    <Alert color="danger">
        {alert}
    </Alert>
)

export default SimpleErrorComponent
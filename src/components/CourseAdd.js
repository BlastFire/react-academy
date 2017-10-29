import React from 'react'
import { Button } from 'reactstrap'

const CourseAdd = props => {
    return (
        <Button outline color='info' onClick={props.onClick}>Add a course</Button>
    )
}
export default CourseAdd

import React from 'react'
import { Button } from 'reactstrap'
import './css/CourseAdd.css'

const CourseAdd = props => {
    return (
        <Button className="button-add" outline color='info' onClick={props.onClick}>Add a course</Button>
    )
}
export default CourseAdd

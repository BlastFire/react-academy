import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ListGroup } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { withFirebase } from 'react-redux-firebase'
import { fetchCourses } from '../reducers/courseReducer'
import CourseListItem from './CourseListItem'
import CourseAdd from './CourseAdd'

class CourseList extends Component {

    onCourseAddHandler = (e) => {
        this.props.history.push('/courses/add')
    }

    render() {
        return (
            <ListGroup>
                <CourseAdd onClick={this.onCourseAddHandler} />
                {
                    this.props.courses.map(course => !course.invisible ? <CourseListItem key={course.id} {...course} /> : '')
                }
            </ListGroup>
        )
    }
}

export default compose(
    withFirebase,
    withRouter,
    connect(
        (state) => ({ courses: state.crs.courses }),
        { fetchCourses }
    )
)(CourseList)
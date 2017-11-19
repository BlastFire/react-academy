import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ListGroup } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { withFirebase, isEmpty } from 'react-redux-firebase'
import { fetchCourses, toggleCourse } from '../reducers/courseReducer'
import CourseListItem from './CourseListItem'
import CourseAdd from './CourseAdd'

class CourseList extends Component {

    onCourseAddHandler = (e) => {
        this.props.history.push('/courses/add')
    }

    render() {
        const { fAuth, toggleCourse } = this.props
        return (
            <ListGroup>
                {
                    !isEmpty(fAuth) && <CourseAdd onClick={this.onCourseAddHandler} />
                }
                {
                    this.props.courses.map(course => {
                        if (!isEmpty(fAuth) || !course.invisible) {
                            return <CourseListItem action={toggleCourse} key={course.id} {...course} />
                        }
                    })
                }
            </ListGroup>
        )
    }
}

export default compose(
    withFirebase,
    withRouter,
    connect(
        (state) => ({
            courses: state.crs.courses,
            fAuth: state.firebase.auth
        }),
        { fetchCourses, toggleCourse }
    )
)(CourseList)
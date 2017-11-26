import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ListGroup } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { isEmpty } from 'react-redux-firebase'
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
            [
                !isEmpty(fAuth) && <CourseAdd key='1' onClick={this.onCourseAddHandler} />,
                <ListGroup key='2'>
                    {
                        this.props.courses.map(course => {
                            if (!isEmpty(fAuth) || !course.invisible) {
                                return <CourseListItem action={toggleCourse} key={course.id} {...course} />
                            }
                        })
                    }
                </ListGroup>
            ]
        )
    }
}

export default compose(
    withRouter,
    connect(
        (state) => ({
            courses: state.crs.courses,
            fAuth: state.firebase.auth
        }),
        { fetchCourses, toggleCourse }
    )
)(CourseList)
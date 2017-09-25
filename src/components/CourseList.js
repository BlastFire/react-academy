import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'reactstrap';
import CourseListItem from './CourseListItem'
import { fetchCourses } from '../reducers/courseReducer'

class CourseList extends Component {

    componentDidMount() {
        this.props.fetchCourses()
    }

    render() {

        return (
            <ListGroup>
                {
                    this.props.courses.map(course => <CourseListItem key={course.id} {...course} />)
                }
            </ListGroup>
        )

    }

}

export default connect(
    (state) => ({ courses: state.crs.courses }),
    { fetchCourses }
)(CourseList)


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardDeck,
    Button, CardHeader
} from 'reactstrap';
import './css/Top5Courses.css';
import { top5Courses } from '../reducers/courseReducer'
import { withRouter } from 'react-router-dom';

const CourseCard = props => {
    const { headerTxt, coursesNewest, history } = props
    return (
        <Card>
            <CardHeader>{headerTxt}</CardHeader>
            {
                coursesNewest.map(course => {
                    return (
                        <CardBody key={course.id}>
                            <CardTitle>{course.name}</CardTitle>
                            <CardSubtitle>{course.category}</CardSubtitle>
                            <CardText>{course.description}</CardText>
                            <Button onClick={() => history.push(`/courses/${course.id}`)}>Go to Course Details</Button>
                        </CardBody>
                    )
                })
            }
        </Card>
    )
}

class Top5Courses extends Component {

    componentDidMount() {
        this.props.top5Courses(true)
    }

    render() {

        return (
            <CardDeck>
                <CourseCard headerTxt="Top 5 newest courses" {...this.props} />
                <CourseCard headerTxt="Top 5 updated courses" {...this.props} />
                <CourseCard headerTxt="Top 5 rated courses" {...this.props} />
            </CardDeck>
        )
    }
}

export default compose(
    withRouter,
    connect(
        (state) => ({ coursesNewest: state.crs.coursesNewest, coursesUpdated: state.crs.coursesUpdated, coursesMostRating: state.crs.coursesMostRating }),
        { top5Courses }
    )
)(Top5Courses)
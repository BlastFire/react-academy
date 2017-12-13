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
    const { headerTxt, source, history } = props
    return (
        <Card>
            <CardHeader>{headerTxt}</CardHeader>
            {
                source.map(course => {
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

        const { coursesNewest, coursesUpdated, coursesMostRating } = this.props

        return (
            <CardDeck>
                <CourseCard headerTxt="Top 5 newest courses" source={coursesNewest} />
                <CourseCard headerTxt="Top 5 updated courses" source={coursesUpdated} />
                <CourseCard headerTxt="Top 5 rated courses" source={coursesMostRating} />
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
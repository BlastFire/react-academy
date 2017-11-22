import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardDeck,
    Button, CardHeader
} from 'reactstrap';
import './css/Top5Courses.css';
import { top5Courses } from '../reducers/courseReducer'

class Top5Courses extends Component {

    componentDidMount() {
        this.props.top5Courses(true)
    }

    render() {

        const { coursesNewest, coursesUpdated, coursesMostRating } = this.props

        return (
            <CardDeck>
                <Card>
                    <CardHeader>Top 5 newest courses</CardHeader>
                    {
                        coursesNewest.map(course => {
                            return (
                                <CardBody key={course.id}>
                                    <CardTitle>{course.name}</CardTitle>
                                    <CardSubtitle>{course.category}</CardSubtitle>
                                    <CardText>{course.description}</CardText>
                                    <Button>Go to Course Details</Button>
                                </CardBody>
                            )
                        })
                    }
                </Card>
                <Card>
                    <CardHeader>Top 5 last updated courses</CardHeader>
                    {
                        coursesUpdated.map(course => {
                            return (
                                <CardBody key={course.id}>
                                    <CardTitle>{course.name}</CardTitle>
                                    <CardSubtitle>{course.category}</CardSubtitle>
                                    <CardText>{course.description}</CardText>
                                    <Button>Go to Course Details</Button>
                                </CardBody>
                            )
                        })
                    }
                </Card>
                <Card>
                    <CardHeader>Top 5 rated courses</CardHeader>
                    {
                        coursesMostRating.map(course => {
                            return (
                                <CardBody key={course.id}>
                                    <CardTitle>{course.name}</CardTitle>
                                    <CardSubtitle>{course.category}</CardSubtitle>
                                    <CardText>{course.description}</CardText>
                                    <Button>Go to Course Details</Button>
                                </CardBody>
                            )
                        })
                    }
                </Card>
            </CardDeck>
        )
    }
}

export default compose(
    connect(
        (state) => ({ coursesNewest: state.crs.coursesNewest, coursesUpdated: state.crs.coursesUpdated, coursesMostRating: state.crs.coursesMostRating }),
        { top5Courses }
    )
)(Top5Courses)
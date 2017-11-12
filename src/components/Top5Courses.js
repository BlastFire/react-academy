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
        this.props.top5Courses()
    }

    render() {

        const { coursesNewest, coursesUpdated, coursesMostRating } = this.props
        console.log(coursesNewest)

        return (
            <h1>asd</h1>
        )
    }
}

export default compose(
    connect(
        (state) => ({ coursesNewest: state.coursesNewest, coursesUpdated: state.coursesUpdated, coursesMostRating: state.coursesMostRating }),
        { top5Courses }
    )
)(Top5Courses)
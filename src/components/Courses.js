import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Route } from 'react-router-dom'
import './css/Courses.css'
import CourseList from './CourseList'
import DisplayCourse from './DisplayCourse'

const Courses = ({ match }) => {

    return (
        <div className='Courses'>
            <Container>
                <Row>
                    <Col xs="3">
                        <CourseList />
                    </Col>
                    <Col xs="9">
                        <Route path={`${match.url}/:courseId`} render={({ match }) => (
                            <DisplayCourse courseId={match.params.courseId} />
                        )} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Courses
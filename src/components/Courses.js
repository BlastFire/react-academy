import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom'
import './css/Courses.css'
import CourseList from './CourseList'
import DisplayCourse from './DisplayCourse'
import CourseForm from './CourseForm'
import CourseDescription from './CourseDescription'
import CourseFormContainer from './CourseFormContainer'

const Courses = ({ match }) => {

    return (
        <div className='Courses'>
            <Container style={{ padding: '5px' }}>
                <Row>
                    <Col xs="3">
                        <CourseList />
                    </Col>
                    <Col xs="9">
                        <Switch>
                            <Route exact path="/courses/add" render={props => (
                                <CourseFormContainer {...props} edit={false} />
                            )} />
                            <Route exact path={`${match.url}/:courseId/edit`} render={props => (
                                <CourseFormContainer {...props} edit={true} />
                            )} />
                            <Route path={`${match.url}/:courseId`} render={({ match }) => (
                                <DisplayCourse courseId={match.params.courseId} />
                            )} />
                            <Route component={CourseDescription} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Courses
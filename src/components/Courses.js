import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom'
import './css/Courses.css'
import CourseList from './CourseList'
import DisplayCourse from './DisplayCourse'
import CourseForm from './CourseForm'
import CourseFormEdit from './CourseFormEdit'

const Courses = ({ match }) => {

    return (
        <div className='Courses'>
            <Container>
                <Row>
                    <Col xs="3">
                        <CourseList />
                    </Col>
                    <Col xs="9">
                        <Switch>
                            <Route exact path="/courses/add" component={CourseForm} />
                            <Route exact path={`${match.url}/:courseId/edit`} component={CourseFormEdit} />
                            <Route path={`${match.url}/:courseId`} render={({ match }) => (
                                <DisplayCourse courseId={match.params.courseId} />
                            )} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Courses
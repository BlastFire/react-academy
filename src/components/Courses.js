import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom'
import './css/Courses.css'
import CourseList from './CourseList'
import DisplayCourse from './DisplayCourse'
import CourseForm from './CourseForm'
import CourseFormEdit from './CourseFormEdit'
import CourseDescription from './CourseDescription'
import Formichka from './Formichka'
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchConfigLanguages, addCourse } from '../reducers/courseReducer'
import { withRouter } from 'react-router-dom'

const Courses = ({ match }) => {

    return (
        <div className='Courses'>
            <Container style={{padding: '5px'}}>
                <Row>
                    <Col xs="3">
                        <CourseList />
                    </Col>
                    <Col xs="9">
                        <Switch>
                            {/* <Route exact path="/courses/add" component={CourseForm} /> */}
                            <Route exact path="/courses/add" component={enhance(CourseForm)} />
                            {/* <Route exact path="/courses/add" render={ props => {
                                return enhance(Formichka)
                            }} /> */}
                            <Route exact path={`${match.url}/:courseId/edit`} component={CourseFormEdit} />
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


// const enhance = (Formichka) => props => {
//     return (<Formichka {...props} />)
// }

const enhance = compose(
    connect(
        state => ({ languageConfig: state.crs.configCourse.languages }),
        { fetchConfigLanguages, addCourse }
    ),
    withRouter,
    reduxForm({
        form: 'courseForm'
    })
)



export default Courses
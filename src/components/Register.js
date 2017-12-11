import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { firebaseConnect, isEmpty } from 'react-redux-firebase'
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'
import SimpleErrorComponent from './feedback/SimpleErrorComponent'
import { CommonInput } from './helpers/CommonInput'
import { withRouter } from 'react-router';
import { regFulfilledA, regA } from '../reducers/courseReducer'

class Register extends Component {

    //when props are changed from the login epic,
    //and we have uid set, lets redirect
    componentWillReceiveProps(nextProps) {
        nextProps.auth.uid ? nextProps.history.push('/courses') : ''
    }

    render() {

        const { handleSubmit, firebase, history, auth, authError, register } = this.props

        return (
            <Container style={{ paddingTop: '20px' }} key="1">
                {
                    authError && <SimpleErrorComponent alert={authError.message} />
                }
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={5}>
                            <Field component={CommonInput} type="email" name="email" placeholder="Email to register you with" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={5}>
                            <Field component={CommonInput} type="password" name="password" placeholder="Your password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 5, offset: 2 }}>
                            <Button type="submit" disabled={!isEmpty(auth)} onClick={handleSubmit(register)}>Register</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        register: (data) => dispatch(regA(data)),
        regFulfilledA
    }
}

export default compose(
    firebaseConnect(),
    withRouter,
    reduxForm({
        form: 'registerForm'
    }),
    connect(
        ({ firebase: { auth, authError }, crs: { loading } }) => ({ auth, authError, loading }),
        mapDispatch
    )
)(Register)
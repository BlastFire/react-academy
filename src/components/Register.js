import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { firebaseConnect, isEmpty } from 'react-redux-firebase'
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'
import SimpleErrorComponent from './feedback/SimpleErrorComponent'
import { CommonInput } from './helpers/CommonInput'
import { withRouter } from 'react-router';
import { loadingA, loadedA } from '../reducers/courseReducer'

let userExists = false

const Register = props => {

    const { handleSubmit, firebase, history, auth, authError, loadingA, loadedA } = props

    const register = ({ email, password }) => {
        loadingA()
        firebase.createUser({ email, password }).then((response) => {
            loadedA()
            history.push(`/`)
        }, error => {
            loadedA()
        })
    }

    return (
        <Container style={{ paddingTop: '20px' }} key="1">
            {
                authError && <SimpleErrorComponent alert={authError.message} />
            }
            {
                !isEmpty(auth) && <SimpleErrorComponent alert={"You already registered!"} />
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
                        <Button type="submit" disabled={!isEmpty(auth)} onClick={handleSubmit(data => register(data))}>Register</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    )
}

export default compose(
    firebaseConnect(),
    withRouter,
    reduxForm({
        form: 'registerForm'
    }),
    connect(
        ({ firebase: { auth, authError }, crs: { loading } }) => ({ auth, authError, loading }),
        { loadingA, loadedA }
    )
)(Register)
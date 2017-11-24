import React from 'react'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { withFirebase } from 'react-redux-firebase'
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'
import { CommonInput } from './helpers/CommonInput'
import { withRouter } from 'react-router';

const Login = props => {

    const { handleSubmit, firebase, history } = props

    const login = (data) => {
        //login with firebase
        firebase.login(data).then(response => {
            history.push(`/`)
        }, error => console.log(`Oops: ${error}`))
    }

    return (
        <Container>
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
                        <Button type="submit" onClick={handleSubmit(data => login(data))}>Login</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    )
}

export default compose(
    withRouter,
    withFirebase,
    reduxForm({
        form: 'loginForm'
    })
)(Login)
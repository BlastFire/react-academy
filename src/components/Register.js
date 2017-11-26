import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { firebaseConnect, isEmpty } from 'react-redux-firebase'
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'
import { CommonInput } from './helpers/CommonInput'
import { withRouter } from 'react-router';
import UserAlreadyIn from './UserAlreadyIn'

let userExists = false

class Register extends Component {

    register = ({ email, password }) => {
        this.props.firebase.createUser({ email, password }).then((response) => {
            this.props.history.push(`/`)
        }, error => {
            userExists = true
            this.forceUpdate()
            console.log(`Oops: ${error}`)
        })
    }

    render() {
        const { handleSubmit, auth } = this.props

        if (!isEmpty(auth)) return (<UserAlreadyIn text="registered" />)

        return (
            [
                <Container style={{paddingTop: '20px'}} key="1">
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
                                <Button type="submit" onClick={handleSubmit(data => this.register(data))}>Register</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Container>,
                userExists && <h1 key="2">user already exists</h1>
            ]
        )
    }
}

export default compose(
    firebaseConnect(),
    withRouter,
    reduxForm({
        form: 'registerForm'
    }),
    connect(
        ({ firebase: { auth } }) => ({ auth })
    )
)(Register)
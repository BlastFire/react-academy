import React from 'react'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'
import { CommonInput } from './helpers/CommonInput'

const Register = props => {

    const { handleSubmit } = props

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
                        <Button type="submit" onClick={handleSubmit(data => console.log(data))}>Register</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
    )
}

export default compose(
    reduxForm({
        form: 'registerForm'
    })
)(Register)
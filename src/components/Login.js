import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { withFirebase, isEmpty, firebaseConnect } from 'react-redux-firebase'
import { withRouter } from 'react-router';
import { Col, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap'
import Button from 'react-bootstrap-button-loader'
import { CommonInput } from './helpers/CommonInput'
import SimpleErrorComponent from './feedback/SimpleErrorComponent'
import { vEmail, vMaxLength, vRequired } from '../Validators/CommonValidators'
import { loginA, loginFulfulledA } from '../reducers/courseReducer'

const vMaxLength15 = vMaxLength(15)

class Login extends Component {

    //when props are changed from the login epic,
    //and we have uid set, lets redirect
    componentWillReceiveProps(nextProps) {
        nextProps.auth.uid ? nextProps.history.push('/courses') : ''
    }

    render() {

        const { handleSubmit, firebase, history, auth, authError, loading, error, login } = this.props

        return (
            <Container style={{ paddingTop: '20px' }}>
                {
                    authError && <SimpleErrorComponent alert={authError.message} />
                }
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={5}>
                            <Field component={CommonInput} type="email" name="email" validate={[vRequired, vEmail]} placeholder="Email to login you with" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={5}>
                            <Field component={CommonInput} type="password" name="password" validate={[vRequired, vMaxLength15]} placeholder="Your password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{ size: 5, offset: 2 }}>
                            <Button bsStyle="primary" disabled={!isEmpty(auth)} loading={loading} onClick={handleSubmit(login)}>Login</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        login: (data) => dispatch(loginA(data)),
        loginFulfulledA
    }
}

export default compose(
    withRouter,
    firebaseConnect(),
    reduxForm({
        form: 'loginForm'
    }),
    connect(
        ({ firebase: { auth, authError }, crs: { loading, error } }) => ({ auth, authError, loading, error }),
        mapDispatch
    )
)(Login)
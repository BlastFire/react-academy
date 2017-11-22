import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Col, Form, FormGroup, Label } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { CommonInput } from './helpers/CommonInput'
import { StarInput } from './helpers/StarInput'
import { vRequired, vMaxLength, vEmail } from '../Validators/CommonValidators'
import { fetchCourse, fetchConfigLanguages, editCourse } from '../reducers/courseReducer'
import StarsComponent from './FormComponents/StarComponent'

//validation setup
const vMaxLength25 = vMaxLength(25)
const vMaxLength15 = vMaxLength(15)
const vMaxLength50 = vMaxLength(50)

class CourseFormEdit extends Component {

    componentDidMount() {
        this.props.fetchConfigLanguages()
    }

    render() {
        const { handleSubmit, languageConfig, history } = this.props

        const redirectCb = () => history.push('/courses')

        return (
            <div>
                <h2> Editing a course </h2>
                <Form>

                    <FormGroup row>
                        <Label for="name" sm={2}>Course Name</Label>
                        <Col sm={10}>
                            <Field name="name" type="text" component={CommonInput} validate={[vRequired, vMaxLength25]} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="category" sm={2}>Category</Label>
                        <Col sm={10}>
                            <Field name="category" type="text" component={CommonInput} validate={[vRequired, vMaxLength15]} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="teacherName" sm={2}>Teacher's name</Label>
                        <Col sm={10}>
                            <Field name="teacherName" type="text" component={CommonInput} validate={[vRequired, vMaxLength15]} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="teacherEmail" sm={2}>Teacher's email</Label>
                        <Col sm={10}>
                            <Field name="teacherEmail" type="email" component={CommonInput} validate={[vRequired]} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="description" sm={2}>Description</Label>
                        <Col sm={10}>
                            <Field name='description' type='text' component={CommonInput} textarea={true} validate={[vRequired, vMaxLength50]} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="language" sm={2}>Language</Label>
                        <Col sm={10}>
                            <Field component={CommonInput} type="select" name="language" >
                                <option value="">--Select--</option>
                                {languageConfig.map((langOption) => (
                                    <option value={langOption.code} key={langOption.code}>{langOption.value}</option>
                                ))}
                            </Field>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="invisible" sm={2}>Invisible</Label>
                        <Col sm={{ size: 10 }}>
                            <Field name="invisible" component="input" type="checkbox" />{' '}
                            Set this course invisible for non-auth users
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="rating" sm={2}>Rating</Label>
                        <Col sm={{ size: 10 }}>
                            <StarsComponent edit="true" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="image" sm={2}>Course image</Label>
                        <Col sm={10}>
                            <Field component={CommonInput} type="file" name="image" />
                        </Col>
                    </FormGroup>
                    {<button className="btn btn-primary" onClick={handleSubmit(data =>
                        this.props.editCourse({ course: data, redirectCb }))}
                        type="submit">Save</button>}
                </Form>
            </div >
        )
    }
}

export default compose(
    connect(
        (state, ownProps) => ({
            initialValues: fetchCourse(state.crs.courses, ownProps.match.params.courseId),
            languageConfig: state.crs.configCourse.languages,
        }),
        { fetchConfigLanguages, editCourse }
    ),
    withRouter,
    reduxForm({
        form: 'courseForm'
    })
)(CourseFormEdit)
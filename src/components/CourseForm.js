import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Col, Form, FormGroup, Label } from 'reactstrap'
import { CommonInput } from './helpers/CommonInput'
import { StarInput } from './helpers/StarInput'
import { vRequired, vMaxLength, vEmail } from '../Validators/CommonValidators'
import { fetchConfigLanguages } from '../reducers/courseReducer'
import { addCourse } from '../lib/courseFakeService'

//validation setup
const vMaxLength25 = vMaxLength(25)
const vMaxLength15 = vMaxLength(15)
const vMaxLength50 = vMaxLength(50)


class CourseForm extends Component {

    componentDidMount() {
        this.props.fetchConfigLanguages()
    }

    render() {
        const { handleSubmit, languageConfig } = this.props
        return (
            <div>
                <h2> Adding a course </h2>
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
                        <Label for="visible" sm={2}>Visibility</Label>
                        <Col sm={{ size: 10 }}>
                            <Field name="visible" component="input" type="checkbox" />{' '}
                            Set this course invisible for non-auth users
                    </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="rating" sm={2}>Rating</Label>
                        <Col sm={{ size: 10 }}>
                            <Field name="rating" component={StarInput} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="image" sm={2}>Course image</Label>
                        <Col sm={10}>
                            <Field component={CommonInput} type="file" name="image" />
                        </Col>
                    </FormGroup>

                    <button className="btn btn-primary" onClick={handleSubmit(data => addCourse(data))} type="submit">Submit</button>
                </Form>
            </div >
        )
    }
}

CourseForm = connect(
    state => ({ languageConfig: state.crs.configCourse.languages }),
    { fetchConfigLanguages }
)(CourseForm)

CourseForm = reduxForm({
    form: 'courseForm'
})(CourseForm)

export default CourseForm

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Col, Form, FormGroup, Label } from 'reactstrap'
import { CommonInput } from './helpers/CommonInput'
import { StarInput } from './helpers/StarInput'

const validate = vals => {
    const errors = {}

    if (!vals.cName) {
        errors.cName = 'Required'
    } else if (vals.cName.length > 25) {
        errors.cName = 'Must be 25 characters or less'
    }

    if (!vals.category) {
        errors.category = 'Required'
    } else if (vals.category.length > 25) {
        errors.category = 'Must be 25 characters or less'
    }

    return errors
}

let CourseForm = props => {

    const { handleSubmit } = props

    return (
        <div>
            <h2> Adding a course </h2>
            <Form>
                <FormGroup row>
                    <Label for="cName" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Field name="cName" type="text" component={CommonInput} />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="category" sm={2}>Category</Label>
                    <Col sm={10}>
                        <Field name="category" type="text" component={CommonInput} />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="teacherName" sm={2}>Teacher's name</Label>
                    <Col sm={10}>
                        <Field name="teacherName" type="text" component={CommonInput} />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="teacherEmail" sm={2}>Teacher's email</Label>
                    <Col sm={10}>
                        <Field name="teacherEmail" type="email" component={CommonInput} />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="description" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Field name='description' type='email' component='textarea' />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="language" sm={2}>Language</Label>
                    <Col sm={10}>
                        <Field component={CommonInput} type="select" name="language">
                            <option value="">--Select--</option>
                            <option value="BG">Bulgarian</option>
                            <option value="GB">English</option>
                            <option value="FR">French</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="courseVisibility" sm={2}>Visibility</Label>
                    <Col sm={{ size: 10 }}>
                        <Field name="visbility" component="input" type="checkbox" />{' '}
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
                    <Label for="file" sm={2}>Course image</Label>
                    <Col sm={10}>
                        <Field component={CommonInput} type="file" name="videoFile" />
                    </Col>
                </FormGroup>

                <button className="btn btn-primary" onClick={handleSubmit(data => console.log(data))} type="submit">Submit</button>
            </Form>
        </div >
    )
}

// CourseForm = connect(
//     state => state
// )(CourseForm)

CourseForm = reduxForm({
    form: 'courseForm',
    validate
})(CourseForm)

export default CourseForm

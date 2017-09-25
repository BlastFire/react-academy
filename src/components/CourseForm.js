import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
//import { connect } from 'react-redux'

const renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div>
            <label>
                {label}
            </label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                    error &&
                    <span>
                        {error}
                    </span>}
            </div>
        </div>
    )
}

let CourseForm = props => {

    const { handleSubmit } = props

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" component={renderField} />

                <label htmlFor="category">Category</label>
                <Field name="category" type="text" component={renderField} />

                <label htmlFor="teacherName">Teacher's name</label>
                <Field name="teacherName" type="text" component={renderField} />

                <label htmlFor="teacherEmail">Teacher's email</label>
                <Field name="teacherEmail" type="text" component={renderField} />

                <label htmlFor="description">Description</label>
                <Field name="description" component="textarea" />
                <br />

                <label htmlFor="language">Language</label>
                <div>
                    <Field name="language" component="select">
                        <option />
                        <option value="BG">Bulgarian</option>
                        <option value="GB">English</option>
                        <option value="FR">French</option>
                    </Field>
                </div>

                <button onClick={handleSubmit(data => console.log(data))} type="submit">Submit</button>
            </div>
        </form>
    )
}

// CourseForm = connect(
//     state => state
// )(CourseForm)

CourseForm = reduxForm({
    form: 'courseForm'
})(CourseForm)

export default CourseForm

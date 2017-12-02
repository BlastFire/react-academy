import React from 'react'
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchConfigLanguages, addCourse, editCourse, fetchCourse } from '../reducers/courseReducer'
import { withRouter } from 'react-router-dom'
import CourseForm from './CourseForm'
import { withConfig } from './hoc/WithConfig';
import { withFormAdd } from './hoc/WithFormAdd';
import { withFormEdit } from './hoc/WithFormEdit';

const CourseFormContainer = props => {
    return props.edit ? <EditForm {...props} /> : <AddForm {...props} />
}

const EditForm = withFormEdit(CourseForm)
const AddForm = withFormAdd(CourseForm)

export default CourseFormContainer
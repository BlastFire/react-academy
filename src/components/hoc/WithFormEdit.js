import React from 'react'
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchConfigLanguages, editCourse, fetchCourse } from '../../reducers/courseReducer'
import { withRouter } from 'react-router-dom'
import { withConfig } from './WithConfig';

export const withFormEdit = compose(
    withConfig({ edit: true }),
    connect(
        (state, ownProps) => ({
            initialValues: fetchCourse(state.crs.courses, ownProps.match.params.courseId),
            languageConfig: state.crs.configCourse.languages,
        }),
        { fetchConfigLanguages, handleData: editCourse }
    ),
    withRouter,
    reduxForm({
        form: 'courseForm'
    })
)
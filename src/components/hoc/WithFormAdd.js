import React from 'react'
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchConfigLanguages, addCourse } from '../../reducers/courseReducer'
import { withRouter } from 'react-router-dom'
import { withConfig } from './WithConfig';

export const withFormAdd = compose(
    withConfig({ edit: false }),
    connect(
        state => ({ languageConfig: state.crs.configCourse.languages }),
        { fetchConfigLanguages, handleData: addCourse }
    ),
    withRouter,
    reduxForm({
        form: 'courseForm'
    })
)
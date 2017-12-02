import React from 'react'
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchConfigLanguages, addCourse } from '../reducers/courseReducer'
import { withRouter } from 'react-router-dom'
import CourseForm from './CourseForm'


const Formichka = props => (
    <div>
        <X />
        <Y />
    </div>
)

// const withAddForm = compose(
//     connect(
//         state => ({ languageConfig: state.crs.configCourse.languages }),
//         { fetchConfigLanguages, addCourse }
//     ),
//     withRouter,
//     reduxForm({
//         form: 'courseForm'
//     })
// )

// const enhance = CourseFormHoc => props => (CourseFormHoc)
// const Form = enhance(withAddForm(CourseForm))

const X = props => (<h1>{props.name}</h1>)

const hoc = overrides => Comp => props => (<Comp {...props} {...overrides} />)

const Y = hoc({name: "Pietro"})(X)



export default Formichka
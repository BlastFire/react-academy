import React from 'react'
import ReactStars from 'react-stars'
import { Field } from 'redux-form'
import { StarInput } from '../helpers/StarInput'

const StarComponent = ({ edit, value }) => (
    edit ?
        <Field name="rating" component={StarInput} />
        :
        <ReactStars value={value} edit={false} count={5} size={24} color2={'#ffd700'} />
)

export default StarComponent
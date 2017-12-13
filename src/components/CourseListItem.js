import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { ListGroupItem, Button } from 'reactstrap'
import './css/CourseItem.css'
import './css/DisplayCourse.css'
import { withRouter } from 'react-router-dom'
import { isEmpty } from 'react-redux-firebase'
import ToggleFlip from './UIComponents/ToggleFlip'

const CourseListItem = ({ id, name, invisible, history, match, action, firebase, auth }) => {

    const onClick = () => {
        action(id)

        /*
        disable propagation on the click event,
        so clicking on the button, wont trigger the course list component click event
        */
        // e.stopPropagation()
    }

    return (
        <ListGroupItem onClick={() => history.push(`${match.url}/${id}`)}>
            {name}
            {
                !isEmpty(auth) &&
                <ToggleFlip className='floatRight' on={!invisible} vtext='Visible' itext='Invisible' onToggle={onClick} />
            }
        </ListGroupItem>
    )
}

export default compose(
    withRouter,
    connect(
        ({ firebase: { auth } }) => ({ auth })
    )
)(CourseListItem)
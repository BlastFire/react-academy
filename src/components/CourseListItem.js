import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { ListGroupItem, Button } from 'reactstrap'
import './css/CourseItem.css'
import './css/DisplayCourse.css'
import { withRouter } from 'react-router-dom'
import { withFirebase, isEmpty } from 'react-redux-firebase'

const CourseListItem = ({ id, name, invisible, history, match, action, firebase, auth }) => {

    const onClick = e => {
        action({ firebase, id })

        /*
        disable propagation on the click event,
        so clickin on the button, wont trigger the course list component click event
        */
        e.stopPropagation()
    }

    return (
        <ListGroupItem onClick={() => history.push(`${match.url}/${id}`)}>
            <div className="Course-ListItem">
                {name}
                {
                    !isEmpty(auth) &&
                    <Button className="floatRight " color="info" onClick={onClick}>{invisible ? "Show" : "Hide"}</Button>
                }
            </div>
        </ListGroupItem>
    )
}

export default compose(
    withFirebase,
    withRouter,
    connect(
        ({ firebase: { auth } }) => ({ auth })
    )
)(CourseListItem)
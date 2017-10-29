import React from 'react'
import { ListGroupItem } from 'reactstrap'
import './css/CourseItem.css'
import { withRouter } from 'react-router-dom'

const CourseListItem = ({ id, name, description, history, match }) => {

    return (
        <ListGroupItem onClick={() => history.push(`${match.url}/${id}`)}>
            <div className="Course-ListItem">
                {name}
            </div>
        </ListGroupItem>
    )
}

export default withRouter(CourseListItem)
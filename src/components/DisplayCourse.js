import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
    Card, CardImg, CardText, CardBody, CardTitle, CardHeader, Button
} from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { withFirebase } from 'react-redux-firebase'
import * as moment from 'moment'
import './css/DisplayCourse.css'
import { fetchCourse, fetchConfigLanguages, deleteCourse } from '../reducers/courseReducer'
import StarsComponent from './FormComponents/StarComponent'

class DisplayCourse extends Component {

    componentDidMount() {
        this.props.fetchConfigLanguages(this.props.firebase)
    }

    /*
    IMPORTANT- only this hook will call when props are changed(eg. from link)
    */
    componentWillReceiveProps() { }

    render() {

        /*
        fixed a problem, when user directly types the route in browser instead of clicking on the navigation "link".
        In that case, rendering of this component occurs, BEFORE loading the data from storage with redux action creator,
        leading to "undefined" result from fetchCourse filter method
        
        ----render is called twice cuz of that crap----

        TODO: resolve it with proper app design
        TODO: wrong id, should return error page of some kind
        */
        if (!this.props.curCourse) {
            return <p>Loading...</p>;
        }
        const { curCourse, languageConfig, deleteCourse, history, firebase } = this.props

        //transmutate course values
        const handleImageSrc = () => curCourse.image ? curCourse.image : "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        if (languageConfig.length > 0) {
            let found = languageConfig.find(el => el.code === curCourse.language)
            curCourse.langValue = found ? found.value : undefined
        }

        const handleEdit = (id) => {
            history.push(`${curCourse.id}/edit`)
        }

        const redirectCb = () => history.push('/courses')

        return (
            <div>
                <Card>
                    <CardHeader tag="h2">
                        {curCourse.name}
                        <Button className="floatRight col-lg-2" color="danger" onClick={() => deleteCourse({ firebase, id: curCourse.id, redirectCb })}>Delete</Button>
                        <Button className="floatRight col-lg-2" color="primary" onClick={() => handleEdit(curCourse.id)}>Edit</Button>
                    </CardHeader>
                    <CardImg top width="50%" src={handleImageSrc()} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card teacher name</CardTitle>
                        <CardText>{curCourse.teacherName}</CardText>
                        <CardTitle>Card teacher email</CardTitle>
                        <CardText>{curCourse.teacherEmail}</CardText>
                        <CardTitle>Language</CardTitle>
                        <CardText>
                            {curCourse.langValue ? curCourse.langValue : curCourse.language ? curCourse.language : 'NONE' }
                        </CardText>
                        <CardTitle>Description</CardTitle>
                        <CardText>{curCourse.description}</CardText>
                        <CardTitle>Last Update Date</CardTitle>
                        <CardText>{moment(curCourse.lastUpdateDate).format('YYYY-MM-DD HH:mm')}</CardText>
                        <CardTitle>Rating</CardTitle>
                        <CardText>
                            <StarsComponent value={curCourse.rating} />
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default compose(
    withFirebase,
    withRouter,
    connect(
        (state, ownProps) => ({
            curCourse: fetchCourse(state.crs.courses, ownProps.courseId),
            languageConfig: state.crs.configCourse.languages
        }),
        { fetchConfigLanguages, deleteCourse }
    )
)(DisplayCourse)

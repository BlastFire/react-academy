import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card, CardImg, CardText, CardBlock, CardTitle, CardHeader
} from 'reactstrap';
import { fetchCourse } from '../reducers/courseReducer'

class DisplayCourse extends Component {

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

        const { curCourse } = this.props

        const handleImageSrc = () => {
            if(curCourse.image) {
                console.log(curCourse.image)
                return curCourse.image
            } else {
                return "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            }
        }

        //https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180

        return (
            <div>
                <Card>
                    <CardHeader tag="h2">{curCourse.name}</CardHeader>
                    <CardImg top width="50%" src={handleImageSrc()} alt="Card image cap"  />
                    <CardBlock>
                        <CardTitle>Card teacher name</CardTitle>
                        <CardText>{curCourse.teacherName}</CardText>
                        <CardTitle>Card teacher email</CardTitle>
                        <CardText>{curCourse.teacherEmail}</CardText>
                        <CardTitle>Language</CardTitle>
                        <CardText>{curCourse.language}</CardText>
                        <CardTitle>Description</CardTitle>
                        <CardText>{curCourse.description}</CardText>
                        <CardTitle>Last Update Date</CardTitle>
                        <CardText>{curCourse.lastUpdateDate}</CardText>
                        <CardTitle>Rating</CardTitle>
                        <CardText>{curCourse.rating}</CardText>
                    </CardBlock>
                </Card>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({ curCourse: fetchCourse(state.crs.courses, ownProps.courseId) })
)(DisplayCourse)
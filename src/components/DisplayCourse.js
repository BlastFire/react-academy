import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Card, CardImg, CardText, CardBlock, CardLink,
    CardTitle, CardSubtitle, Button
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

        return (
            // <h1>DISPLAY COURSE {this.props.curCourse.name}</h1>
            <div>
                <Card>
                    <CardBlock>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBlock>
                </Card>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({ curCourse: fetchCourse(state.crs.courses, ownProps.courseId) })
)(DisplayCourse)
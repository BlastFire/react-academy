import React, { Component } from 'react'
import { Jumbotron, Button, Container, Col } from 'reactstrap';

class Home extends Component {

    render() {
        return (
            <Container>
                <Col style={{ marginTop: "20px"}} sm="12" md={{ size: 10, offset: 1 }}>
                    <Jumbotron>
                    <h1 className="display-3">Home Page</h1>
                    <hr className="my-2" />
                    <p className="lead">Some text here about the application</p>
                </Jumbotron>
                </Col>
            </Container >

        )
    }
}
export default Home
import React, { Component } from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Jumbotron fluid={true}>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <h1>Welcome to React</h1>
                            <p>
                                <Button
                                    tag="a"
                                    color="success"
                                    size="large"
                                    href="http://reactstrap.github.io"
                                    target="_blank"
                                >
                                    Learn More
                                </Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default Home;
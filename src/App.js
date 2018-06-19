import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

import Home from './Home'
import About from './About'

const ContentTypes = {
    home: <Home/>,
    about: <About/>
};

class App extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            contentType: "home"
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {

        let navItems = Object.keys(ContentTypes).map((currentValue, index) => { return (
            <NavItem key={index.toString()}>
                <NavLink onClick={() => {
                    this.setState({
                        contentType: currentValue
                    });
                    console.log(this.state)
                }}>{currentValue}</NavLink>
            </NavItem>
        )});

        return (
            <Container fluid={true}>
                <Navbar color="light" light expand="xs" fixed="top">
                    <Container fluid={true} style={{maxWidth: '980px'}}>
                        <NavbarBrand href="/">Lance Jabr</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>{navItems}</Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Container fluid={true} style={{maxWidth: '980px', marginTop: "100px"}}>
                    {
                        ContentTypes[this.state.contentType]
                    }
                </Container>
            </Container>

        );
    }
}

export default App

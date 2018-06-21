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

import { Link, Route } from 'react-router-dom';

import Home from './Home'
import About from './About'

class App extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {

        let navItems = ["home", "about"].map((currentValue, index) => { return (
            <NavItem key={index.toString()}>
                <Link className={"nav-link"} to={currentValue != "home" ? ("/" + currentValue) : "/"}>{currentValue}</Link>

            </NavItem>
        )});

        return (
            <Container fluid={true}>
                <Navbar color="light" light expand="xs" fixed="top">
                    <Container fluid={true} style={{maxWidth: '980px'}}>
                        <Link className={"navbar-brand"} to={"/"}>Lance Jabr</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>{navItems}</Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Container fluid={true} style={{maxWidth: '980px', marginTop: "100px"}}>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/about"} component={About}/>
                </Container>
            </Container>
        );
    }
}

export default App

import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import {HashLink} from "react-router-hash-link";

const Header = () => {
    const {users, logOut} = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageServices">Manage Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {users?.displayName ? <Button onClick={logOut} variant="light">Logout</Button>
                            : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        {
                            users.displayName && <Navbar.Text className="mx-3">
                                Signed in as: <a href="#login">{users?.displayName}</a>
                            </Navbar.Text>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
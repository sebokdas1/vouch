import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './Header.css'

const Header = () => {

    const [token, setToken] = useState('')

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    const handleLogout = event =>{
        event.preventDefault()
        setToken('')
        localStorage.removeItem('token')
    }



    return (
        <Navbar bg="white" expand="sm" className='mainNav'>
            <Container>
                <Navbar.Brand href="#">
                    <h3 className='primary_color fw-bold'> ATools<span className='secondary_color'>.</span> </h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" className='my-2 button btn_primary text-white mx-1' >Start Free Trial</Nav.Link>
                        {
                            token ? (
                                <Nav.Link onClick={handleLogout} className='my-2 button btn_secondary text-white mx-1' >Logout</Nav.Link>
                            ) : (
                                <Nav.Link href="#" className='my-2 button btn_secondary text-white mx-1' >Login</Nav.Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
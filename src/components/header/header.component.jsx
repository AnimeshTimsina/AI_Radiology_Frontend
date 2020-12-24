import React from "react"
import "./header.styles.css"
import {Navbar,Nav} from "react-bootstrap"
// import logo from "../../assets/health.png"
import HealthLogo from "../../assets/health.svg"

const Header = () => (
    <div className="header">        
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={`${HealthLogo}`}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className='logo-text'>AI RADIOLOGY AND OCT ASSISTANT</span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Nav className='nav-links'>
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/about">ABOUT</Nav.Link>
                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
)

export default Header
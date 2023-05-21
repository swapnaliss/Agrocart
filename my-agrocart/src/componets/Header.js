import React from 'react'
import { Navbar, Container, FormControl, Nav, Dropdown, Badge, Button } from "react-bootstrap"
import { BsFillCartFill, BsHeartFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/" > Agro-Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        style={{ width: 500 }}
                        placeholder='Search a Product'
                        className='m-auto' />
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                            <BsFillCartFill color="white" fontSize="25px" style={{ marginRight: 20 }}/>
                            <Badge>{ }</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10 }}>Cart is Empty</span>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="link" className="nav-link">
                        <BsHeartFill color="white" fontSize="25px" style={{ marginRight: 20 }}/>
                    </Button>
                    <Button variant="primary">Login</Button>


                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
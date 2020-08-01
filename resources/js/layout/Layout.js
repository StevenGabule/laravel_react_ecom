import React, {useState} from "react";

import {Col, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row} from "reactstrap";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem('token');

function Layout({title, children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();

    async function handleLogout(e) {
        e.preventDefault();
        const token = localStorage.getItem('token')
        await axios.post('/api/logout', null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            history.push('/sign-in');
        }).catch(e => {
            history.push('/sign-in');
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        });
    }

    return (
        <div>
            <Navbar color={'light'} light expand={'md'}>
                <Container>
                    <NavbarBrand href="/">SMARKET</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/products">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/foods-recipe">Foods Recipe</NavLink>
                            </NavItem>
                            {isAuthenticated() && (
                                <>
                                    <NavItem>
                                        <NavLink href="/profile">Foods Recipe</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/carts">Foods Recipe</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/logout" onClick={handleLogout}>Sign Out</NavLink>
                                    </NavItem>
                                </>
                            )}
                        </Nav>
                        {!isAuthenticated() && (
                            <>
                                <div className={'d-flex'}>
                                    <Link to="/sign-in" className={'btn'}>Sign In</Link>
                                    <Link to="/sign-up" className={'btn'}>Sign Up</Link>
                                </div>
                            </>
                        )}
                    </Collapse>
                </Container>
            </Navbar>

            <Container>
                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Layout;

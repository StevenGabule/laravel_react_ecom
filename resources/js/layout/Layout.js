import React, {useState} from "react";
import {Col, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row} from "reactstrap";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authRequest } from '../state/ducks/auth/actions';

const isAuthenticated = () => localStorage.getItem('token');

function Layout({title, children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);

    async function handleLogout(e) {
        e.preventDefault();
        await dispatch(authRequest('POST', 'logout', 'LOGOUT', history));
    }

    return (
        <div>
            <Navbar color={'light'} light expand={'md'}>
                <Container className="pl-0">
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
                            {user.user !== null && (
                                <>
                                    <NavItem>
                                        <NavLink href="/profile">Profile</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/carts">Carts</NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/logout" onClick={handleLogout}>Sign Out</NavLink>
                                    </NavItem>
                                </>
                            )}
                        </Nav>
                        {user.user === null && (
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

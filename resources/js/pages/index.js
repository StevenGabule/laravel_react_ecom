import React, {Suspense} from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import {Container, Row, Col} from 'reactstrap';
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Home from "./Home"
import Profile from "./Profile";
import Cart from "./Cart";
import PrivateRoute from "../utils/PrivateRoute";

function waitComponent(Component) {
    return props => (
        <Suspense fallback={<div>...Loading</div>}>
            <Component {...props} />
        </Suspense>
    );
}

function Index() {
    return (
        <Router>
            <div>
                <Switch>

                    <Route exact path={'/'} component={waitComponent(Home)}/>
                    <Route exact path={'/sign-in'} component={waitComponent(SignIn)}/>
                    <Route exact path={'/sign-up'} component={waitComponent(SignUp)}/>

                    <PrivateRoute exact path={'/profile'} component={waitComponent(Profile)}/>
                    <PrivateRoute exact path={'/cart'} component={waitComponent(Cart)}/>

                    <Route>
                        <Container>
                            <Row>
                                <Col lg={'12'}>
                                    <h1>Welcome</h1>
                                </Col>
                            </Row>
                        </Container>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

render(
    <Index/>,
    document.getElementById('app')
);

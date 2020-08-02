import React, {Suspense} from 'react';
import {render} from 'react-dom';
import { persistor, store } from '../state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

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
import Product from "./Product";
import PrivateRoute from "../utils/PrivateRoute";

import Admin from './Backend/admin';

function waitComponent(Component) {
    return props => (
        <Suspense fallback={<div>...Loading</div>}>
            <Component {...props} />
        </Suspense>
    );
}

function Index() {
    return (
        <div>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <div>
                            <Switch>
                                <Route exact path={'/'} component={waitComponent(Home)}/>
                                <Route exact name="single-product" path={'/product/:id'} component={waitComponent(Product)}/>
                                <Route exact path={'/sign-in'} component={waitComponent(SignIn)}/>
                                <Route exact path={'/sign-up'} component={waitComponent(SignUp)}/>

                                <PrivateRoute exact path={'/profile'} component={waitComponent(Profile)}/>
                                <PrivateRoute exact path={'/cart'} component={waitComponent(Cart)}/>
                                <PrivateRoute exact path={'/admin'} component={waitComponent(Admin)}/>

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
                </PersistGate>
            </Provider>
        </div>
    )
}

render(
    <Index/>,
    document.getElementById('app')
);

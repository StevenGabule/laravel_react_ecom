import React, {useEffect, useState} from "react";
import Layout from "../../layout/Layout";
import {Button, Card, CardBody, Form, FormGroup, Input, Label} from "reactstrap";
import { useHistory } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { authRequest } from '../../state/ducks/auth/actions';

const INITIAL_VALUE = {
    email: '',
    password: '',
}

function SignIn() {
    const [user, setUser] = useState(INITIAL_VALUE);
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch();

    /*useEffect(() => {
        if (User.loggedIn()) {
            history.push('/');
        }
    }, [user])*/

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(prevState => ({...prevState, [name]: value}))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await dispatch(authRequest('POST', 'login', 'LOGIN', history, user));
    }

    return (
        <Layout title={'Login Page'}>
            <Card style={{
                width: '60%',
                margin: '5% auto auto auto',
            }}>
                <CardBody>
                    <h3>Login</h3>
                    <Form onSubmit={handleSubmit}>

                        <FormGroup>
                            <Label for="inputEmail">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="inputEmail"
                                value={user.email}
                                onChange={handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="inputPassword">Password</Label>
                            <Input type="password" name="password" id="inputPassword" value={user.password} onChange={handleChange} />
                        </FormGroup>

                        <Button type={'submit'} color={'primary'} disabled={loading}>{loading  ? 'logging...' : 'Login'}</Button>
                    </Form>
                </CardBody>
            </Card>
        </Layout>
    )
}

export default SignIn;

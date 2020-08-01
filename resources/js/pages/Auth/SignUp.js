import React, {useState} from "react";
import Layout from "../../layout/Layout";
import {Button, Card, CardBody, Form, FormGroup, Input, Label} from "reactstrap";

const INITIAL_VALUE = {
    name: 'mike ross',
    email: 'mikeross@gmail.com',
    password: 'password',
    password_confirmation: 'password',
}

function SignUp() {
    const [user, setUser] = useState(INITIAL_VALUE);
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(prevState => ({...prevState, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('register', user).then((user) => {
            console.log(user)
        }).catch(err => console.error(err))
    }

    return (
        <Layout title={'Login Page'}>
            <Card style={{
                width: '60%',
                margin: '5% auto auto auto',
            }}>
                <CardBody>
                    <h3>Free Registration</h3>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="inputName">Name</Label>
                            <Input type="text" name="name" id="inputName" value={user.name} onChange={handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="inputEmail">Email</Label>
                            <Input type="email" name="email" id="inputEmail"  value={user.email} onChange={handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="inputPassword">Password</Label>
                            <Input type="password" name="password" id="inputPassword" value={user.password} onChange={handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="ConfirmedPassword">Confirm Password</Label>
                            <Input type="password" name="password_confirmation" id="ConfirmedPassword"  value={user.password_confirmation}  onChange={handleChange} />
                        </FormGroup>
                        <Button type={'submit'}>Create</Button>
                    </Form>
                </CardBody>
            </Card>
        </Layout>
    )
}

export default SignUp;

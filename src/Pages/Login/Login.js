import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const Login = () => {

    return (
        <div className="loginpage">
            <div>
                <h1>Welcome To E_Course Profile System</h1>
            </div>

            <Container>
                <Form>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="username">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" />
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Enter Password" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="login">Login</Button>{' '}
                </Form>
            </Container>

        </div>
    );

};
export default Login;
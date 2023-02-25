import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Teacher = () => {

    return (
        <div className='row'>
            <Col sm={4} className="mt-3 mb-3">
                <Container className='card p-4' style={{ borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                    <Form>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Name </Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Email </Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Password </Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Session </Form.Label>
                                <Form.Control type="text" placeholder="Enter Session" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Department </Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Course </Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </Col>
                    </Form>
                </Container>
            </Col>
        </div>
    );

};
export default Teacher;
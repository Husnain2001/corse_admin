import React from 'react';
import "./Registration.css"
import { Row, Col, Form, Button, Card, Table } from 'react-bootstrap';

const AddRegistration = () => {

    <Row>
        <Card className='mt-5' style={{ width: '550px', marginLeft: '15rem' }}>
            <h3 style={{ textAlign: 'center', marginTop: '2rem' }}> Teachers Registration </h3>
            <Card.Body>
                <Row className='p-3'>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                    </Col>

                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Email </Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                    </Col>

                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Password </Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                    </Col>

                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Session </Form.Label>
                            <Form.Control type="text" placeholder="Enter Session" />
                        </Form.Group>
                    </Col>

                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Department </Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                    </Col>

                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Course </Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Row>

};
export default AddRegistration;
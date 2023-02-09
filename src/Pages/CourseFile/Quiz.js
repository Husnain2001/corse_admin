import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const Quiz = () => {

    return (
        <div className="quiz">
            <Container>
                <Form>
                    <Col>
                        <div>
                            <h1>Quiz Details</h1>
                        </div>
                        <Form.Group controlId="quiz1">
                            <Form.Label> Quiz1 </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="quiz2">
                            <Form.Label> Quiz2 </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="assignment1">
                            <Form.Label> Assignment1 </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="assignment2">
                            <Form.Label> Assignment2 </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>


                </Form>
            </Container>

        </div>
    );

};
export default Quiz;
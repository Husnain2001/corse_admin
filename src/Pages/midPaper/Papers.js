import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const Mid= () => {

    return (
        <div className="mid">
           

            <Container>
                <Form>
                          <h1>Mid Term Paper</h1>
                          <Col>
                        <Form.Group controlId="question_paper">
                            <Form.Label> Question Paper </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student1">
                            <Form.Label> Student1 Paper </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student2">
                            <Form.Label> Student2 Paper </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student3">
                            <Form.Label> Student3 Paper </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="result">
                            <Form.Label> Result </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                
                   

                </Form>
            </Container>

        </div>
    );

};
export default Mid;
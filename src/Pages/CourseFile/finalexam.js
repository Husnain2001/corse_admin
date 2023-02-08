import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const Finalexam= () => {

    return (
        <div className="finalexam">
           

            <Container>
                <Form>
                          <h1>Final Term Exam</h1>
                          <Col>
                        <Form.Group controlId="question_paper">
                            <Form.Label> Question Paper </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student1">
                            <Form.Label> Student1 Paper(Lowest) </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student2">
                            <Form.Label> Student2 Paper(Average) </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="student3">
                            <Form.Label> Student3 Paper(Best) </Form.Label>
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
export default Finalexam;
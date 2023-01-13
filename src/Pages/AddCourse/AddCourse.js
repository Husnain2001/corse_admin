import React, { useRef, useState, useEffect } from "react";



import {
    InputGroup,
    FormControl,
    Form,
    Card,
    Container,
    Row,
    Col, Table, Button, Modal
} from "react-bootstrap";

import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';


const Course = () => {

    return (
        <div>
            <Row>
                <Col sm={4}>
                    <Card className="mt-5">
                        <Card.Body>
                            <Form>
                                <div className="row">

                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url"> Course Id </Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl type="text" />
                                        </InputGroup>
                                        <Form.Label htmlFor="basic-url"> Course Name </Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl type="text" />
                                        </InputGroup>
                                        <Form.Label htmlFor="basic-url"> Assigned Teacher </Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl type="text" />
                                        </InputGroup>
                                        <Form.Label htmlFor="basic-url"> Department </Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl type="text" />
                                        </InputGroup>
                                        <Form.Label htmlFor="basic-url"> Shift </Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl type="text" />
                                        </InputGroup>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group controlId="Add">
                                            <Button variant="primary" type="submit" size="lg" block>
                                                Add
                                            </Button>
                                        </Form.Group>
                                    </Col>

                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={8} className="mt-5">
                    <div className="card">
                        <div className="card-body">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Course Id</th>
                                        <th> Course Name</th>
                                        <th>Assigned Teaher</th>
                                        <th> Department </th>
                                        <th>Shift </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
};
export default Course;
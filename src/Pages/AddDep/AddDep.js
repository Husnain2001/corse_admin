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


const Department = () => {

    return (
        <div>
            <Row>
                <Col sm={4}>
                    <Card className="mt-5">
                        <Card.Body>
                            <Form>
                                <div className="row">

                                    <Col md={12}>
                                        <Form.Label htmlFor="basic-url"> Name </Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl type="text" />
                                        </InputGroup>
                                        <Form.Label htmlFor="basic-url"> Degree Name </Form.Label>
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
                                        <th> Department Name</th>
                                        <th> Degree Name</th>
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
export default Department;
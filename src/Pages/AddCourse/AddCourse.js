import React, { useRef, useState, useEffect } from "react";


import {
    Form,
    Card,
    Container,
    Row,
    Col, Table, Button, Modal
} from "react-bootstrap";

import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';

import { POST, GETID, DELETE, PUT, GET } from "../../apicontroller/ApiController"


const Course = () => {
 
    const [departments, setDepartment] = useState([]);

    const fetchData = async () => {
        GET("department").then((result) => {
            setDepartment(result);
        });
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <Row>

                <Col sm={4}>
                    <Card className="mt-3">
                        <Card.Body>
                            <Form>
                                <div className="row">

                                    <Col md={12}>
                                        <Form.Group className="">
                                            <Form.Label>   Course Id </Form.Label>
                                            <Form.Control type="text" placeholder="Product" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label>  Course Name </Form.Label>
                                            <Form.Control type="text" placeholder="Product" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>

                                        <Form.Group className="mt-3">
                                            <Form.Label> Department </Form.Label>
                                            <Form.Control className="form-control" as="select">
                                                <option value=""> --- Select --- </option>
                                                {departments.map((department) => (
                                                    <option value={department.id}>{department.department}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>

                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label> Assigned Teacher </Form.Label>
                                            <Form.Control type="text" placeholder="Product" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label> Shift </Form.Label>
                                            <Form.Control type="text" placeholder="Product" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group controlId="submit">
                                            <Button className="mt-3" variant="primary" type="submit" size="lg" block>
                                                Submit
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
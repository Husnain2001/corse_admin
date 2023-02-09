import React from 'react';
import "./Coursefile.css";

import {
    InputGroup,
    Form,
    Card,
    Row,
    Col,
} from "react-bootstrap";

const Coursefile = () => {

    return (
        <div className='Coursefile'>
            <Card className="rounded-0 border-0 mt-3">
                <Card.Body className="pb-3 pt-0 pt-5">
                    <h3 className="mb-3"> Add Courses </h3>
                    <Row className="bg-white rounded-0 border-0">

                        <Col md={6}>
                            <Form.Group className="">
                                <Form.Label> Department </Form.Label>
                                <Form.Control className="form-control" as="select">
                                    <option>Choose Department</option>
                                    <option value="1">BS Computer Sciences</option>
                                    <option value="2">BS Industrial & Manufacturing Engineering</option>
                                    <option value="3">BS Software Engineering</option>
                                    <option value="4"> BS Electrical Engineering</option>
                                    <option value="5">BS Physics</option>
                                    <option value="6">BS MAth</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="">
                                <Form.Label> Session </Form.Label>
                                <Form.Control className="form-control" as="select">
                                    <option>Choose Department</option>
                                    <option value="1"> 2019 </option>
                                    <option value="2"> 2020 </option>
                                    <option value="3"> 2021 </option>
                                    <option value="4"> 2022 </option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mt-3">
                                <Form.Label> Courses </Form.Label>
                                <Form.Control className="form-control" as="select">
                                    <option>Choose Department</option>
                                    <option value="1">BS Computer Sciences</option>
                                    <option value="2">BS Industrial & Manufacturing Engineering</option>
                                    <option value="3">BS Software Engineering</option>
                                    <option value="4"> BS Electrical Engineering</option>
                                    <option value="5">BS Physics</option>
                                    <option value="6">BS MAth</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mt-3">
                                <Form.Label> Teachers </Form.Label>
                                <Form.Control className="form-control" as="select">
                                    <option>Choose Department</option>
                                    <option value="1">BS Computer Sciences</option>
                                    <option value="2">BS Industrial & Manufacturing Engineering</option>
                                    <option value="3">BS Software Engineering</option>
                                    <option value="4"> BS Electrical Engineering</option>
                                    <option value="5">BS Physics</option>
                                    <option value="6">BS Mathematics</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mt-3">
                                <Form.Label> Semester </Form.Label>
                                <Form.Control className="form-control" as="select">
                                    <option>Choose Department</option>
                                    <option value="1">BS Computer Sciences</option>
                                    <option value="2">BS Industrial & Manufacturing Engineering</option>
                                    <option value="3">BS Software Engineering</option>
                                    <option value="4"> BS Electrical Engineering</option>
                                    <option value="5">BS Physics</option>
                                    <option value="6">BS Mathematics</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="mt-3">
                                <Form.Label> Course Outline </Form.Label>
                                <InputGroup className="mb-3">
                                    <input type="file" multiple accept="image/*" />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="">
                                <Form.Label> Attendence </Form.Label>
                                <InputGroup className="mb-3">
                                    <input type="file" multiple accept="image/*" />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr />
                </Card.Body>
            </Card>
        </div>
    );

};
export default Coursefile;
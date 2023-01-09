import React from 'react';

import {
    InputGroup,
    FormControl,
    Form,
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";
const Course = () => {

    return (
        <Container>
            <Card className="rounded-0 border-0 mt-3">
                <Card.Body className="pb-3 pt-0 pt-5">
                    <h3 className="mb-3"> Add Courses </h3>
                    <Row className="bg-white rounded-0 border-0">

                        <Col md={6}>
                            <Form.Group className="">
                                <Form.Label> Course Name </Form.Label>
                                <InputGroup className="mb-3">
                                    <FormControl type="text" id="basic-url" aria-describedby="basic-addon3"
                                        placeholder="e.g. Hungs Continental Foods" />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="">
                                <Form.Label> Category </Form.Label>
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
                                <Form.Label> Course Id </Form.Label>
                                <InputGroup className="mb-3">
                                    <FormControl type="text" id="basic-url" aria-describedby="basic-addon3"
                                        placeholder="e.g. Hungs Continental Foods" />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group className="">
                                <Form.Label> Description </Form.Label>
                                <InputGroup className="mb-3">
                                    <FormControl as="textarea" rows="5" id="basic-url" aria-describedby="basic-addon3"
                                        placeholder="e.g. Hungs Continental Foods" />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr />
                </Card.Body>
            </Card>
        </Container>
    );

};
export default Course;
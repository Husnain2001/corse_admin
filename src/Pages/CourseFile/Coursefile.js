import React, { useState } from 'react';

import {
    InputGroup,
    Form,
    Card,
    Row,
    Col,
} from "react-bootstrap";

import Finalexam from './finalexam';
import Midexam from './Midexam';


const Coursefile = () => {

    const [page, setPage] = useState(1);

    return (
        <div className='Coursefile'>
            <Card className="rounded-0 border-0 mt-3">
                {page === 1 ? (
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
                ) : ("")}

            </Card>
            {page === 2 ? (
                <Midexam />
            ) : ("")}
            {page === 3 ? (
                <Finalexam />
            ) : ("")}
            {page === 1 ? (
                <button className='mt-4' style={{backgroundColor:'#1F5156', color:'white', borderRadius:'25px', padding:'0.5rem'}} onClick={() => setPage(1)}> Prev Page </button>
            ) : ("")}

            <button className='ms-3' style={{backgroundColor:'#1F5156', color:'white', borderRadius:'25px', padding:'0.5rem'}} onClick={() => setPage(2)}> {page === 1 ? ("Next Page") : ("Prev Page")}</button>

            { page === 1 ? ("") : 
                (   <button className='ms-3 mt-3' style={{backgroundColor:'#1F5156', color:'white', borderRadius:'25px', padding:'0.5rem'}} onClick={() => setPage(3)}> 
                        {page === 2 ? ("Next Page") : ("Submit")} 
                    </button>
                )
            }

        </div>
    );

};
export default Coursefile;
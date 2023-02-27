import React, { useRef, useState, useEffect } from 'react';

import { FormControl,Container, Row, Col, Form, Button, Modal, Table,Card } from 'react-bootstrap';

import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { toast } from "react-toastify";

import { POST, GETID, DELETE, PUT, GET } from "../../apicontroller/ApiController"

const Teacher = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const departmentRef = useRef();
    const passwordRef = useRef();

    const submit = async (event) => {
        event.preventDefault();
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            department: departmentRef.current.value,
            
        };
        POST("teacher", formData).then((res) => {
            toast("Teacher Added Successfully")
        });
    };

    // Edit Funation

    const [teacherid, setTeacherId] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Edit FUNCTION
    const edit = async (event, id) => {
        setTeacherId(id);
        GETID("teacher", id, "");
        handleShow();
    };


    const [teachers, setTeachers] = useState(false);

    const fetchdata = async () => {
        GET("teacher/").then((result) => {
            setTeachers(result);
        });
    };

    useEffect(() => {
        fetchdata();
    }, [])

    const remove = async (event, id) => {
        await DELETE("teacher/delete", id, "");
        fetchdata();
    };
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
                    <Card className="mt-5">
                        <Card.Body>
                            <Container className='card p-4' style={{ borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                                <Form>
                                <div className="row">
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Name </Form.Label>
                                            <Form.Control ref={nameRef} type="text" placeholder="Enter Name"   />
                                        </Form.Group>
                                    
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Email </Form.Label>
                                            <Form.Control ref={emailRef} type="email" placeholder="Enter Email"  />
                                        </Form.Group>
                                    
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Password </Form.Label>
                                            <Form.Control ref={passwordRef} type="password" placeholder="Enter Password"   />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label> Department </Form.Label>
                                            <Form.Control ref={departmentRef} className="form-control" as="select"  >
                                                <option value=""> --- Select --- </option>
                                                {departments.map((department) => (
                                                    <option value={department.id}>{department.department}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>

                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className='mt-3'>
                                            <Button onClick={submit} variant="primary" type="submit" size="lg" block>
                                                Submit
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                    </div>
                                </Form>
                            </Container>
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
                                            <th> Name</th>
                                            <th>Email</th>
                                            <th> Department </th>
                                            <th> Action </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {teachers && teachers.map((teacher) => (

                                        <tr>
                                            <td> {teacher.iD} </td>
                                            <td> {teacher.name} </td>
                                            <td> {teacher.email} </td>
                                            <td> {teacher.password} </td>
                                            <td> {teacher.department} </td>
                                            <td>
                                                <AiFillDelete style={{ color: 'red' }} onClick={(e) => remove(e, teacher.ID)} />
                                                <BsFillPencilFill style={{ color: 'blue', marginLeft: '1rem' }} onClick={(e) => edit(e, teacher.ID)} />
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
            </Row>

        </div>
    );

};
export default Teacher;
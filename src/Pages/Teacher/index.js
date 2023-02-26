import React, { useRef, useState, useEffect } from 'react';

import { FormControl,Container, Row, Col, Form, Button, Modal, Table,Card } from 'react-bootstrap';

import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { toast } from "react-toastify";

import { POST, GETID, DELETE, PUT, GET } from "../../apicontroller/ApiController"

const Teacher = () => {

    const teachernameRef = useRef();
    const teacheremailRef = useRef();
    const teacherdeptRef = useRef();
    const teacherpassRef = useRef();

    const submit = async (event) => {
        event.preventDefault();
        const formData = {
            Name: teachernameRef.current.value,
            Email: teacheremailRef.current.value,
            Password: teacherpassRef.current.value,
            Department: teacherdeptRef.current.value,
            
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

    // Edit Ref
    const eteachernameRef = useRef();
    const eteacheremailRef = useRef();
    const eteacherdeptRef = useRef();
    const eteacherpassRef = useRef();

    // Send edited data to the databse finction
    const eSubmit = (event, id) => {
        event.preventDefault();
        const formData = {
            Name: eteachernameRef.current.value,
            Email: eteacheremailRef.current.value,
            Password: eteacherpassRef.current.value,
            Department: eteacherdeptRef.current.value,
        };

        PUT("teacher", id, formData).then((res) => {
            toast("Teacher Updated Successfully");
            fetchdata();
        });
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
                                            <Form.Control type="text" placeholder="Enter Name" ref={teachernameRef}  />
                                        </Form.Group>
                                    
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Email </Form.Label>
                                            <Form.Control type="email" placeholder="Enter Email" ref={teacheremailRef} />
                                        </Form.Group>
                                    
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label> Password </Form.Label>
                                            <Form.Control type="password" placeholder="Enter Password" ref={teacherpassRef}  />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label> Department </Form.Label>
                                            <Form.Control className="form-control" as="select"  >
                                                <option value=""> --- Select --- </option>
                                                {departments.map((department) => (
                                                    <option value={department.id}>{department.department}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>

                                    </Col>

                                    <Col md={12}>
                                        <Form.Group controlId="Add">
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
                                            <td> {teacher.ID} </td>
                                            <td> {teacher.Name} </td>
                                            <td> {teacher.Email} </td>
                                            <td> {teacher.Password} </td>
                                            <td> {teacher.Department} </td>
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Details </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="">
                        <Col md={6}>
                            <Form.Label htmlFor="basic-url"> Name </Form.Label>
                            <FormControl ref={eteachernameRef} className="form-control" />
                        </Col>

                        <Col md={6}>
                            <Form.Label htmlFor="basic-url"> Email </Form.Label>
                            <FormControl ref={eteacheremailRef} className="form-control" />
                        </Col>

                        <Col md={6}>
                            <Form.Label htmlFor="basic-url"> Password </Form.Label>
                            <FormControl ref={eteacherpassRef} className="form-control" />
                        </Col>

                        <Col md={6}>
                            <Form.Label htmlFor="basic-url"> Department </Form.Label>
                            <FormControl ref={eteacherdeptRef} className="form-control" />
                        </Col>
                    </Row>
                </Modal.Body>
                <div className="my-2 pl-3 mb-5">
                    <Button className="btn-custom border-0 mx-3" variant="danger" onClick={(e) => eSubmit(e, teacherid)} >
                        Submit
                    </Button>
                </div>
            </Modal>
        </div>
    );

};
export default Teacher;
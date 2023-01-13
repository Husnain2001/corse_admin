import React, { useRef, useState, useEffect } from "react";

import { POST, GETID, DELETE, PUT, GET } from "../../apicontroller/ApiController"

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

import { toast } from "react-toastify";


const Department = () => {

    const departmentRef = useRef();
    const degreeRef = useRef();

    const submit = async (event) => {
        event.preventDefault();
        const formData = {
            department: departmentRef.current.value,
            degree: degreeRef.current.value,
        };
        POST("department", formData).then((res) => {
            toast("Department Added Successfully")
        });
    };

    // Edit Funation

    const [departmentid, setDepartmentId] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Edit FUNCTION
    const edit = async (event, id) => {
        setDepartmentId(id);
        GETID("department", id, "");
        handleShow();
    };

    // Edit Ref
    const edepartmentRef = useRef();
    const edegreeRef = useRef();

    // Send edited data to the databse finction
    const eSubmit = (event, id) => {
        event.preventDefault();
        const formData = {
            department: edepartmentRef.current.value,
            degree: edegreeRef.current.value,
        };

        PUT("department", id, formData).then((res) => {
            toast("Department Updated Successfully");
            fetchData();
        });
    };


    const [departments, setDepartments] = useState(false);

    const fetchData = async () => {
        GET("department/").then((result) => {
            setDepartments(result);
        });
    };

    useEffect(() => {
        fetchData();
    }, [])

    const remove = async (event, id) => {
        await DELETE("department/delete", id, "");
        fetchData();
    };

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
                                            <FormControl type="text" ref={departmentRef} />
                                        </InputGroup>
                                        <Form.Label htmlFor="basic-url"> Degree Name </Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl type="text" ref={degreeRef} />
                                        </InputGroup>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group controlId="Add">
                                            <Button onClick={submit} variant="primary" type="submit" size="lg" block>
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
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {departments && departments.map((department) => (

                                        <tr>
                                            <td> {department.id} </td>
                                            <td> {department.department} </td>
                                            <td> {department.degree} </td>
                                            <td>
                                                <AiFillDelete style={{ color: 'red' }} onClick={(e) => remove(e, department.id)} />
                                                <BsFillPencilFill style={{ color: 'blue', marginLeft: '1rem' }} onClick={(e) => edit(e, department.id)} />
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
                            <Form.Label htmlFor="basic-url"> Department </Form.Label>
                            <FormControl ref={edepartmentRef} className="form-control" />
                        </Col>

                        <Col md={6}>
                            <Form.Label htmlFor="basic-url"> Degree </Form.Label>
                            <FormControl ref={edegreeRef} className="form-control" />
                        </Col>
                    </Row>
                </Modal.Body>
                <div className="my-2 pl-3 mb-5">
                    <Button className="btn-custom border-0 mx-3" variant="danger" onClick={(e) => eSubmit(e, departmentid)} >
                        Submit
                    </Button>
                </div>
            </Modal>
        </div>
    )
};
export default Department;
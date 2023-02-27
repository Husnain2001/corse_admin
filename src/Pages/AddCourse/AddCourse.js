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

import { toast } from "react-toastify";

const Course = () => {

    const coursenameRef = useRef();
    const courseidRef = useRef();
    const departmentRef = useRef();
    const teacherRef = useRef();
    const shiftRef = useRef();

    const submit = async (event) => {
        event.preventDefault();
        const formData = {
            department: departmentRef.current.value,
            coursename: coursenameRef.current.value,
            courseid: courseidRef.current.value,
            shift: shiftRef.current.value,
            teacher: teacherRef.current.value,
        };
        POST("course", formData).then((res) => {
            toast("Course Added Successfully")
        });
    };

    // Edit Funation

    const [courseid, setCourseId] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Edit FUNCTION
    const edit = async (event, id) => {
        setCourseId(id);
        GETID("course", id, "");
        handleShow();
    };

    // Edit Ref
    const ecoursenameRef = useRef();
    const ecourseidRef = useRef();
    const edepartmentRef = useRef();
    const eteacherRef = useRef();
    const eshiftRef = useRef();


    // Send edited data to the databse finction
    const eSubmit = (event, id) => {
        event.preventDefault();
        const formData = {
            department: edepartmentRef.current.value,
            coursename: ecoursenameRef.current.value,
            courseid: ecourseidRef.current.value,
            shift: eshiftRef.current.value,
            teacher: eteacherRef.current.value,
        };

        PUT("course", id, formData).then((res) => {
            toast("Course Updated Successfully");
            fetchData();
        });
    };


    const [courses, setCourses] = useState(false);

    const [departments, setDepartment] = useState([]);

    const [teachers, setTeachers] = useState([]);


    const fetchData = async () => {
        GET("course").then((result) => {
            setCourses(result);
        });

        GET("department").then((result) => {
            setDepartment(result);
        });

        GET("teacher").then((result) => {
            setTeachers(result);
        });
    };

    useEffect(() => {
        fetchData();
    }, [])

    const remove = async (event, id) => {
        await DELETE("course/delete", id, "");
        fetchData();
    };

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
                                            <Form.Control ref={courseidRef} type="text" placeholder="Product"  />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label>  Course Name </Form.Label>
                                            <Form.Control ref={coursenameRef} type="text" placeholder="Product"  />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>

                                        <Form.Group className="mt-3">
                                            <Form.Label> Department </Form.Label>
                                            <Form.Control ref={departmentRef} className="form-control" as="select">
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
                                            <Form.Control ref={teacherRef} className="form-control" as="select">
                                                <option value=""> --- Select --- </option>
                                                {teachers.map((teacher) => (
                                                    <option value={teacher.id}>{teacher.name}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label> Shift </Form.Label>
                                            <Form.Control ref={shiftRef} type="text" placeholder="Product"  />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Button onClick={submit} variant="primary" type="submit" size="lg" block>
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
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses && courses.map((course) => (

                                        <tr>
                                            <td> {course.id} </td>
                                            <td> {course.courseid} </td>
                                            <td> {course.coursename} </td>
                                            <td> {course.department} </td>
                                            <td> {course.teacher} </td>
                                            <td> {course.shift} </td>
                                            <td>
                                                <AiFillDelete style={{ color: 'red' }} onClick={(e) => remove(e, course.id)} />
                                                <BsFillPencilFill style={{ color: 'blue', marginLeft: '1rem' }} onClick={(e) => edit(e, course.id)} />
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
    )
};
export default Course;
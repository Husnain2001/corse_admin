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

import Finalexam from './finalexam';
import Midexam from './Midexam';


const Coursefile = () => {

    const coursenameRef = useRef();
    const semesterRef = useRef();
    const departmentRef = useRef();
    const teacherRef = useRef();
    const sessionRef = useRef();

    const submit = async (event) => {
        event.preventDefault();
        const formData = {
            department: departmentRef.current.value,
            coursename: coursenameRef.current.value,
            semester: semesterRef.current.value,
            session: sessionRef.current.value,
            teacher: teacherRef.current.value,
        };
        POST("coursefile", formData).then((res) => {
            toast("Course File Data Added Successfully")
        });
    };

    // Edit Funation

    const [coursefileid, setCoursefileId] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Edit FUNCTION
    const edit = async (event, id) => {
        setCoursefileId(id);
        GETID("coursefile", id, "");
        handleShow();
    };

    // Edit Ref
    const ecoursenameRef = useRef();
    const esemesterRef = useRef();
    const edepartmentRef = useRef();
    const eteacherRef = useRef();
    const esessionRef = useRef();


    // Send edited data to the databse finction
    const eSubmit = (event, id) => {
        event.preventDefault();
        const formData = {
            department: edepartmentRef.current.value,
            coursename: ecoursenameRef.current.value,
            teacher: eteacherRef.current.value,
            semester: esemesterRef.current.value,
            session: esessionRef.current.value,
        };

        PUT("coursefile", id, formData).then((res) => {
            toast("Course File Data Updated Successfully");
            fetchData();
        });
    };


    const [coursefiles, setCoursefiles] = useState(false);

    const [courses, setCourses] = useState(false);

    const [departments, setDepartment] = useState([]);

    const [teachers, setTeachers] = useState([]);


    const fetchData = async () => {
        GET("coursefiles").then((result) => {
            setCoursefiles(result);
        });

        GET("courses").then((result) => {
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
        await DELETE("coursefile/delete", id, "");
        fetchData();
    };

    const [page, setPage] = useState(1);

    return (
        <div className='Coursefile'>
            <Card className="rounded-0 border-0 mt-3">
                {page === 1 ? (
                    <Card.Body className="pb-3 pt-0 pt-5">
                        <h3 className="mb-3"> Course File </h3>
                        <Row className="bg-white rounded-0 border-0">

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

                            <Col md={6}>
                                <Form.Group className="">
                                    <Form.Label> Session </Form.Label>
                                    <Form.Control className="form-control" as="select">
                                        <option>Choose Session</option>
                                        <option value="1"> 2019 </option>
                                        <option value="2"> 2020 </option>
                                        <option value="3"> 2021 </option>
                                        <option value="4"> 2022 </option>
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
                            
                            <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label> Course </Form.Label>
                                            <Form.Control ref={courseRef} className="form-control" as="select">
                                                <option value=""> --- Select --- </option>
                                                {courses.map((course) => (
                                                    <option value={course.id}>{course.name}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                            <Col md={12}>
                                        <Form.Group className="mt-3">
                                            <Form.Label> Teacher </Form.Label>
                                            <Form.Control ref={teacherRef} className="form-control" as="select">
                                                <option value=""> --- Select --- </option>
                                                {teachers.map((teacher) => (
                                                    <option value={teacher.id}>{teacher.name}</option>
                                                ))}
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
                <button className='mt-4' style={{ backgroundColor: '#1F5156', color: 'white', borderRadius: '25px', padding: '0.5rem' }} onClick={() => setPage(1)}> Prev Page </button>
            ) : ("")}

            <button className='ms-3' style={{ backgroundColor: '#1F5156', color: 'white', borderRadius: '25px', padding: '0.5rem' }} onClick={() => setPage(2)}> {page === 1 ? ("Next Page") : ("Prev Page")}</button>

            {page === 1 ? ("") :
                (<button className='ms-3 mt-3' style={{ backgroundColor: '#1F5156', color: 'white', borderRadius: '25px', padding: '0.5rem' }} onClick={() => setPage(3)}>
                    {page === 2 ? ("Next Page") : ("Submit")}
                </button>
                )
            }

        </div>
    );

};
export default Coursefile;
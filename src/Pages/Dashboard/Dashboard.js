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

import "./index.css"

const Dashboard = () => {

    const [courses, setCourses] = useState(0);

    const [departments, setDepartment] = useState(0);

    const [teachers, setTeachers] = useState(0);
    
    useEffect(() => {
      const fetchCount = async () => {
        try {
          const fetchData = await Axios.get(
            GET("course").then((result) => {
                setCourses(fetchData.data.courses);
            }),

            GET("department").then((result) => {
                setDepartment(fetchData.data.departments);
            }),
    
            GET("teacher").then((result) => {
                setTeachers(fetchData.data.teachers);
            }),
          );
          setCourses(fetchData.data[0]['COUNT(*)']);
          setDepartment(fetchData.data[0]['COUNT(*)']);
          setTeachers(fetchData.data[0]['COUNT(*)']);
        } catch (err) {}
      };
      fetchCount();
    }, []);

    console.log(courses);
    console.log(departments);
    console.log(teachers);

    return (
        <Row>
            <Col sm={4}>
                <Card className="mt-5">
                    <div className="card-head1">
                        <Card.Body>
                            <div className="">
                                <img src="/stats.png" style={{ height: "30px", width: "30px" }} />
                                <div className="total-head"> Departments </div>
                                {departments.map((department) => (
                                                    <option value={department.id}></option>
                                                ))}
                                <div className="total-no"> Total Departments  </div>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </Col>

            <Col sm={4}>
                <Card className="mt-5">
                    <div className="card-head2">
                        <Card.Body>
                            <div className="">
                                <img src="/stats.png" style={{ height: "30px", width: "30px" }} />
                                <div className="total-head"> Courses </div>
                                <div className="total-no"> Total Courses  </div>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </Col>

            <Col sm={4}>
                <Card className="mt-5">
                    <div className="card-head3">
                        <Card.Body>
                            <div className="">
                                <img src="/stats.png" style={{ height: "30px", width: "30px" }} />
                                <div className="total-head"> Teachers </div>

                                <div className="total-no"> Total Teachers  </div>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </Col>

        </Row>
    )
}

export default Dashboard
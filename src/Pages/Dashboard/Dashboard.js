import React, { useEffect, useState } from "react";

import { Card, Row, Col } from "react-bootstrap";

import "./index.css"

import { GET } from "../../apicontroller/ApiController"

const Dashboard = () => {

    return (
        <Row>
            <Col sm={4}>
                <Card className="mt-5">
                    <div className="card-head1">
                        <Card.Body>
                            <div className="">
                                <img src="/stats.png" style={{ height: "30px", width: "30px" }} />
                                <div className="total-head"> Departments </div>

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
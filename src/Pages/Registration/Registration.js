import React from 'react';
import "./Registration.css"
import { Row, Col, Table } from 'react-bootstrap';

import { Link } from "react-router-dom"

const Registration = () => {

    <Row>
        <Col sm={12} className="mt-1">
            <div className="card">
                <div className="card-body">
                    <Link to="/" className="btn btn-danger">
                        Enter Details
                    </Link>
                </div>
            </div>
        </Col>

        <Col sm={12} className="mt-3">
            <div className="card">
                <div className="card-body">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Category </th>
                                <th> Super Category </th>
                                <th> Product </th>
                                <th> Specifications </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </Col>
    </Row>
};
export default Registration;
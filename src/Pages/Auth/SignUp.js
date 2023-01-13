import React, { useRef, useState } from "react";

import { Card, Button, Form } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
 
import { POST } from "../../apicontroller/ApiController";
const Signup = () => {



    let navigation = useNavigate();

  const [passError, setPassError] = useState(false);

    /* Function to match password */
    const matchPass = (confirm, password) => {
        if (confirm.length != 0 || password.length != 0) {
            if (password === confirm) {
                setPassError(false);
            } else {
                setPassError(true);
            }
        } else {
            setPassError(true);
        }
    };

    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const submit = async (event) => {
        event.preventDefault();
        const formData = {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            role: 3
        };
        POST("auth", formData).then((res) => {
            toast("Your Login Added Successfully")
            navigation("/");
        });
    };

    return ( 
        <div
            className="d-flex justify-content-center"
            style={{ padding: "50px 0px" }}
        >
            <Card style={{ width: "350px" }} className="border-0">
                <Card.Body style={{ padding: "29px", backgroundColor: "#F3F3F3" }}>
                    <Card.Title
                        className="mb-4"
                        style={{ color: "#233D7B", fontWeight: "700", fontSize: "24px" }}
                    >
                        Sign Up
                    </Card.Title>

                    <Form onSubmit={submit}>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicName"
                            style={{ width: "290px", marginTop: "15px" }}
                        >
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                ref={firstnameRef}
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEamil"
                            style={{ width: "290px" }}
                        >
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                ref={lastnameRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEamil"
                            style={{ width: "290px" }}
                        >
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                ref={emailRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                            style={{ width: "290px" }}
                        >
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                ref={passwordRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicConfirmPassword"
                            style={{ width: "290px" }}
                        >
                            <Form.Control
                                onChange={(e) =>
                                    matchPass(e.target.value, passwordRef.current.value)
                                }
                                type="password"
                                placeholder="Confirm Password"
                                required
                            />
                            {passError && (
                                <span style={{ fontSize: "0.8rem" }} className="text-danger">
                                    Both passwords don't match
                                </span>
                            )}
                        </Form.Group>

                        <Button
                            className="border-0"
                            type="submit"
                            style={{ width: "290px", backgroundColor: "#233D7B" }}
                        >
                            Create Account
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Signup
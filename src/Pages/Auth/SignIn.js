import { useRef } from "react";
import Axios from "axios";

import { Card, Button, Form } from "react-bootstrap";

import { Auth } from "../../context/Auth.Context";

import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const Signin = () => {

  const emailRef = useRef(); 
  const passwordRef = useRef()

  let navigation = useNavigate();


  /* Auth Context */
  const auth = Auth();

  console.log(Auth());
  
  // const history = useHistory();

  /* Submit Form */
  const submit = async (e) => {
    e.preventDefault();

    var check = 0;
    /* Form Validators - Empty Check */
    emailRef.current.value.length === 0 && check++;
    passwordRef.current.value.length === 0 && check++;

    if (check === 0) {

      const formData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const result = await Axios.post(`${process.env.REACT_APP_API_URL}auth/login`, formData);

      if (result.data.error == 0) { 

        /* Successful Login */
        auth.activateToken(localStorage.setItem("token", result.data.token));
        localStorage.setItem("user", JSON.stringify(result.data.user));
        auth.activateToken(localStorage.setItem("token", result.data.token));
        auth.activateAuthentication(true);
        toast("You login Successfully")
        navigation("/dashboard");
      } 
    } 
  };

  return (
    <div className="d-flex justify-content-center" style={{ padding: "50px 0px" }} >
      <Card style={{ width: "350px", backgroundColor: "#F3F3F3" }} className="border-0">
        <Card.Body style={{ padding: "29px" }}>
          <Card.Title style={{ color: "#233D7B", fontWeight: "700", fontSize: "24px" }} >
            <span style={{textAlign:'center'}}> Log in  </span>
          </Card.Title>

          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                ref={emailRef}
                type="text"
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
              <div
                id="login-error-msg"
                className="mt-3 text-danger font-weight-bold"
              ></div>
            </Form.Group>

            <Button
              type="submit"
              className="border-0 w-100"
              style={{ backgroundColor: "#233D7B" }}
            >
              Sign in
            </Button>
          </Form>

          <Link
            to="/signup"
            style={{ fontSize: "12px", float: "right", margin: "10px 10px" }}
          >
            Sign Up!
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Signin
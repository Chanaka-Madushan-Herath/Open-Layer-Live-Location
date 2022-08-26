import React from 'react';
import "./Assets/styles/Login.css"
import NavBar from "./NavBar";
import {Button, Form, Image} from "react-bootstrap";
import logo from "./Assets/images/logo.png";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div>
            <NavBar islogin={true}/>
            <div className="login">
                <div className="bg-color">
                    <div>
                        <Image className="login-logo" src={logo} alt="logo" roundedCircle={true}/>
                    </div>
                    <div className="credentials">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" aria-required={true}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" aria-required={true}/>
                            </Form.Group>
                            <Button variant="primary" onClick={() => navigate("/home")}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="version">
                        <span>V1.0.0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
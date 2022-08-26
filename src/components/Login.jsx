import React, {useState} from 'react';
import "./Assets/styles/Login.css"
import NavBar from "./NavBar";
import {Button, Form, Image} from "react-bootstrap";
import logo from "./Assets/images/logo.png";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({email:'', password:''});
    const [errors, seterrors] = useState({error:{}});
    const [hasEdit, setHasEdit] = useState(false);

    function validateEmail(emailValue, errors) {
        if (emailValue === '') {
            errors["email"] = "Please fill your email";
        } else if (typeof emailValue !== "undefined") {
            if (!emailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                errors["email"] = "Please enter a valid email";
            } else {
                delete errors.email;
            }
        }
        return errors;
    }

    const clientSideValidation = (event) => {
        let error = validateEmail(event.target.value, errors);
        seterrors({...errors,error});
    }

    const handleAria = (errorName, elementName) => {
        if (errorName === '' || errorName === undefined){
            document.getElementById(elementName).removeAttribute("aria-invalid");
        } else {
            document.getElementById(elementName).setAttribute("aria-invalid",true);
        }
    }

    const handleInputAria = (event) => {
        let error = errors;
        if (event.target.id === 'email'){
            handleAria(error["email"], event.target.id);
        }
    }

    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]:e.target.value});
        setHasEdit(true);
    }

    const checkForm = (elements) => {
        let allFieldsFilled = true;

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].value === "") {
                allFieldsFilled = false;
                break;
            }
        }
        return allFieldsFilled;
    }

    const isLoginDisabled = () => {
        let formElements = document.querySelectorAll("[aria-required='true']");
        let isFormFiled = checkForm(formElements);
        if (isFormFiled){
            return (!hasEdit || Object.keys(errors).length>1);
        } else {
            return (hasEdit || !Object.keys(errors).length>1);
        }
    }

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
                                <span id='mail' className='form-error' role='status'>{errors.email}</span>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    aria-describedby='mail'
                                    aria-required={true}
                                    onChange={onChange}
                                    onBlur={clientSideValidation}
                                    onFocus={handleInputAria}/>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    aria-required={true}
                                    onChange={onChange}/>
                            </Form.Group>
                            <Button variant="primary" disabled={isLoginDisabled()} onClick={() => navigate("/Open-Layer-Live-Location/home")}>
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
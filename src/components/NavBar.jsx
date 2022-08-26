import "./Assets/styles/NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./Assets/images/logo.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavBar(props) {
    return (
        <div>
            {props.islogin?
                <Navbar key={'md'} expand={'md'} className="Navbar"/>:
                <Navbar key={'md'} expand={'md'} className="Navbar">
                    <Container fluid>
                        <Navbar.Brand className="name" href="#"><Image src={logo} alt="logo" roundedCircle={true} className="nav-logo"/>Brand Name</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${'md'}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}/>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 link">
                                    <Link to="/Open-Layer-Live-Location/home"><Nav.Link>Home</Nav.Link></Link>
                                    <Link  to="/Open-Layer-Live-Location"><Nav.Link>Login</Nav.Link></Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            }
        </div>
    );
}

export default NavBar;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AppbarComp() {
  const user = localStorage.getItem("token");
  console.log(user);
  const navigate = useNavigate();
  const loginhandler = () => {
    navigate("/login");
  };
  const handleChange =()=>{
    localStorage.clear()
    navigate("/login")
  }

 
  return (
    <Navbar expand="lg" className="Animal p-4">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            className="rescue"
            src="https://animal-rescue.cmsmasters.net/pet-shelter/wp-content/uploads/sites/5/2022/11/logo-pet-shelter.svg"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" variant="pills" defaultActiveKey={"/"}>
            <NavLink
              to="/"
              className="nav-link mx-3  text-light fw-bolder fs-6 "
            >
              Home
            </NavLink>
            <NavLink
              to="/Adoption"
              className="nav-link  px-4 text-light fw-bolder fs-6 "
            >
              Adoption
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link px-4 text-light fw-bolder fs-6 "
            >
              About Us
            </NavLink>
            <NavLink
              to="/Blog"
              className="nav-link px-4 text-light fw-bolder fs-6 "
            >
              Blog
            </NavLink>
            <NavLink
              to="/Contacts"
              className="nav-link px-4 text-light fw-bolder fs-6 "
            >
              Contacts
            </NavLink>
            <NavLink to="/Shop" className="nav-link text-light fw-bolder fs-6">
              Shop
            </NavLink>
          </Nav>

          <Nav className="ms-auto">
            {!user ? (
              <button className="bg-teal-400 loginbtn" onClick={loginhandler}>
                Login
              </button>
            ) : (
              <button
                className="bg-teal-400 loginbtn"
                onClick={handleChange}
              >
                Logout
              </button>
            )}

            <button className="icon-btn m-4 search">
              <CiSearch />
            </button>

            <button className="donate">Donate</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppbarComp;

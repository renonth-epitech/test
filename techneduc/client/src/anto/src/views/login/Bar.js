import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function Bar() {
  const navigate = useNavigate();

  return (
    <Navbar sticky="top" style={{ margin: "0 5em" }}>
      <Navbar.Brand
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img
          alt=""
          src={require("../../assets/Logo.png")}
          className="d-inline-block align-top"
        />
        <div
          style={{
            marginLeft: "1em",
            fontSize: "1.5rem",
          }}
        >
          Techneduc
        </div>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="d-flex">
          <Nav.Link href="login" style={{ marginRight: "3em" }}>
            Se connecter
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

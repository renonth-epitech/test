import React from "react";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./TopBar.scss";

export default function Bar() {
  const navigate = useNavigate();

  return (
    <Navbar
      sticky="top"
      style={{ margin: "0 4em" }}
      >
      <Navbar.Brand
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => navigate("/profile")}
      >
        <img
          alt=""
          src={require("../../../assets/Logo.png")}
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
    </Navbar>
  );
}

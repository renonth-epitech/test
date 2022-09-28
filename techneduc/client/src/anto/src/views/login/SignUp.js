import React, { useRef, useState, useEffect } from "react";
import { Container, Form, Card, Alert } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Bar from "./Bar";
import lottie from "lottie-web";
import { UseAuth } from "./AuthContext";
import axios from 'axios';

export default function SignUp() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { Signup } = UseAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const container = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await Signup(
        usernameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      axios.post(`http://localhost:5000/signup`, { username:usernameRef, email:emailRef, password:passwordRef }).then(function (response) {
        // handle success
        console.log(response);
      })
      setLoading(false);
      navigate("/home");
    } catch {
      setError("Failed to create an account");
      setLoading(false);
    }
  }

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../assets/lottie.json"),
    });
  }, []);

  return (
    <div>
      <Bar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "80vh",
          margin: "auto 5em",
        }}
      >
        <div
          className="container"
          ref={container}
          style={{ width: "35rem", marginLeft: "3em" }}
        />
        <div style={{ width: "35%", marginRight: "2em" }}>
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "100%" }}>
              <Card
                className="shadow p-3 bg-white rounded"
                style={{ border: "1px solid #1762A7" }}
              >
                <Card.Body>
                  <h2 className="text-center mb-4">S'inscrire</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Form.Group id="username" className="mb-4 80w">
                      <Form.Label>Pseudo</Form.Label>
                      <Form.Control
                        type="username"
                        ref={usernameRef}
                        required
                      />
                    </Form.Group>
                    <Form.Group id="email" className="mb-4">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control
                        type="password"
                        ref={passwordRef}
                        required
                      />
                    </Form.Group>
                    <Form.Group id="password_confirm" className="mb-4">
                      <Form.Label>Confirmation de mot de passe</Form.Label>
                      <Form.Control
                        type="password"
                        ref={passwordConfirmRef}
                        required
                      />
                    </Form.Group>
                    <Button
                      disabled={loading}
                      variant="contained"
                      style={{ width: "80%", marginBottom: "1.5em" }}
                      type="submit"
                    >
                      S'inscrire
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <div className="w-100 text-center mt-2">
                Vous avez déjà un compte? <Link to="/login">Se connecter</Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

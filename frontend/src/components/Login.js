import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const sessionData = response.data.data;
      // console.log(response.data.data);
      localStorage.setItem('sessionData', JSON.stringify(sessionData));
      if (sessionData){
        window.location.href = '/dashboard';
      } else {
        setError("Invalid Credentials");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${'https://source.unsplash.com/random/?trading'})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          &ensp; OneTradeAI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="bg-white rounded p-4 shadow-sm">
              <h2 className="text-center mb-4">Log in to your account</h2>
              <Form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="btn-block">
                  Log in
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

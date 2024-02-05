import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { HobbiesBtn } from "../component/HobbiesBtn";
import { Buttons } from "../component/Buttons";

export default function Home() {
  const handleClick = () => {};

  return (
    <Container fluid className="home-layout">
      <div className="section">
        <div className="firstSection">
          <h1 className="custom-h1">
            JONATHAN PAYAWAL <Badge bg="info">ジュナ</Badge>
          </h1>
        </div>
        <div className="secondSection">
          <h6 className="custom-h6">
            AWS Action Batch 38B | DX Transformation
          </h6>
        </div>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Created By</InputGroup.Text>
            <Form.Control
              placeholder="Full Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Row>
            <Col>
              <div className="buttons">
                <Buttons
                  label="Calculator"
                  to="/Calculator"
                  cssscript={"calJson-btn"}
                />
              </div>
            </Col>
            <Col>
              <div className="buttons">
                <Buttons label="JSON" to="/JSON" cssscript={"calJson-btn"} />
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer">
          <Card>
            <Card.Header>My Hobbies</Card.Header>
            <Card.Body>
              <Card.Title>Know More About Me!</Card.Title>

              <HobbiesBtn label="My Hobbies" to="/Hobbies" />
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

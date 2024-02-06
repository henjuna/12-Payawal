import { Buttons } from "../component/Buttons";
import { Badge, Col, Container, Row, Stack } from "react-bootstrap";
import { CarouselImage } from "../component/CarouselImage";

export default function Hobies() {
  return (
    <Container fluid className="hobbiesPage">
      <div className="hobby-Heading">
        <div className="hobby-headerText">
          <p>Heneral Juna | ジュナ将軍</p>
        </div>
        <div className="hobby-headerBtn">
          <Buttons label="Back to Home" to="/" cssscript={"home-Btn"} />
        </div>
      </div>
      <div className="carousel-size">
        <CarouselImage />
      </div>
      <div className="hobby-body">
        <div>
          <Row>
            <Col sm={4} className="image-col">
              <img src="design.jpeg" className="img-size"></img>
            </Col>
            <Col sm={8}>
              <p className="hobby-text">
                👋 Hey there! I'm Jonathan, a passionate individual with a
                diverse range of hobbies that truly define who I am. From the
                adrenaline rush of playing sports to the rhythmic beats of
                beatboxing, I find joy and inspiration in various facets of
                life. Graphic design and photography allow me to unleash my
                creative side, crafting visual stories that speak louder than
                words. Editing is not just a skill but a way to bring
                imagination to life. When the football field calls, I answer
                with enthusiasm, embracing the camaraderie and competition. Join
                me on this journey through the lens of my hobbies, where each
                passion contributes to the vibrant tapestry of my life. 🚀✨
              </p>
            </Col>
          </Row>
        </div>
        <div className="singleHobby">
          <Row>
            <Col className="hobby-header" id='odd'>
              <Badge bg="info">
                <h5>📷 PHOTOGRAPHY</h5>
              </Badge>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <img src="photog2.jpeg" className="img-size"></img>
            </Col>
            <Col sm>
              <img src="photog.jpeg" className="img-size"></img>
            </Col>
            <Col sm>
              <img src="solo.jpeg" className="img-size"></img>
            </Col>
            <Col sm>
              <img src="basket.jpeg" className="img-size"></img>
            </Col>
          </Row>
        </div>
        <div className="singleHobby">
          <Row>
            <Col className="hobby-header" id='even'>
              <Badge bg="info">
                <h5>🏅 SPORTS</h5>
              </Badge>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <img src="fball2.jpeg" className="img-size"></img>
            </Col>
            <Col sm>
              <img src="fball3.jpeg" className="img-size"></img>
            </Col>
            <Col sm>
              <img src="sstacks.jpeg" className="img-size"></img>
            </Col>
          </Row>
        </div>
        <div className="singleHobby">
          <Row>
            <Col className="hobby-header" id='odd'>
              <Badge bg="info">
                <h5>🎬 EDITING</h5>
              </Badge>
            </Col>
          </Row>
          <Row>
          <Col sm>
              <img src="edit1.jpg" className="img-size"></img>
            </Col>
            <Col sm>
              <img src="edit.jpeg" className="img-size"></img>
            </Col>
            <Col sm>
              <img src="edit2.jpg" className="img-size"></img>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        {/* <div className="home-Btn">
          <Buttons label="Back to Home" to="/" cssscript={"hobbyBtn"} />
        </div> */}
      </div>
    </Container>
  );
}

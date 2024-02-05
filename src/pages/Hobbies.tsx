import { Buttons } from "../component/Buttons";
import { Container } from "react-bootstrap";
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
        
      </div>
      <div>
        {/* <div className="home-Btn">
          <Buttons label="Back to Home" to="/" cssscript={"hobbyBtn"} />
        </div> */}
      </div>
    </Container>
  );
}

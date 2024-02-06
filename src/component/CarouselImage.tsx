import { Carousel } from "react-bootstrap";

export const CarouselImage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src="fball.jpg" />
        <Carousel.Caption>
          <h3 className="car-text">Football</h3>
          <p className="car-text">Juna's Hobbies</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src="graphicdes.webp" />
        <Carousel.Caption>
          <h3 className="car-text">Graphic Designing</h3>
          <p className="car-text">Juna's Hobbies</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src="sstacks.jpeg" />
        <Carousel.Caption>
          <h3 className="car-text">Sports Stacking</h3>
          <p className="car-text">Juna's Hobbies</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcS4oWpm0-zDpVrQKiFicmqE7KMxU6mUPbQ&usqp=CAU"
        />
        <Carousel.Caption>
          <h3 className="car-text">Beatbox</h3>
          <p className="car-text">Juna's Hobbies</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

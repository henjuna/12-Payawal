import { Carousel } from "react-bootstrap";

export const CarouselImage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src="fball.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src="graphicdes.webp" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src="sstacks.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcS4oWpm0-zDpVrQKiFicmqE7KMxU6mUPbQ&usqp=CAU" />
      </Carousel.Item>
    </Carousel>
  );
};

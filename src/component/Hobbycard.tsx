import React, { FC } from "react";
import { Card } from "react-bootstrap";

interface CardProps {
    title: string;
    text: string;
    image: string;
    identification: string;
}

export const HobbyCard: FC<CardProps> = ({ title, text, image, identification}) => {
  return (
    <div className="component-hobbycard">
      <Card className="hobby-card">
        <Card.Img variant="top" src={image} className="hobby-card-image" id={identification}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
import React from 'react'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import { HobbyCard } from '../component/Hobbycard'
import { Buttons } from '../component/Buttons'

export default function Hobies() {
  return (
    <Container fluid className="hobbiesPage">
      <div>
        <div>
        <Row className="justify-content-center mt-5">
        <Col md={8}>
          <h1 className="text-center mb-4">My Hobbies</h1>
          <Row className="justify-content-center">
            {/* Hobby Card 1 */}
            <Col md={4}>
              <HobbyCard identification='cardHobbies' image='bbox.jpg' title="Beatbox" text='I started learning beatbox when I was 11 years old.'/>
            </Col>

            {/* Hobby Card 2 */}
            <Col md={4}>
              <HobbyCard identification='cardHobbies' image='sstacks.jpeg' title="Sports Stacking" text='I used to play when I was a kid. I became a part of the Philippine team after I ranked 8th on the National Competition on year 2010.'/>
            </Col>

            {/* Hobby Card 3 */}
            <Col md={4}>
            <HobbyCard  identification='cardHobbies'image='graphicdes.webp' title="Graphic Designing" text='Got interested in graphic designing when I was on High School. I am making posters for events and have tried comissioned projects for businesses.'/>
            </Col>

            {/* Hobby Card 4 */}
            <Col md={4}>
            <HobbyCard identification='cardHobbies' image='fball.jpg' title="Football" text='Became a football player when I was on sixth grade and got a chance to be a part of the varsity team on our university.'/>
            </Col>
            
            {/* Hobby Card 4 */}
            <Col md={4}>
            <HobbyCard identification='cardHobbies' image='https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-learning-feature.jpg' title="Photography/ Videography" text='I got hooked in to it when I was on my Senior High School years. Together with my friends, we established a group named Rebelhues, and make an income out of our skills.'/>
            </Col>
          </Row>
        </Col>
      </Row>
        </div>
      <div className='hobbyBtn'>
        <div className="mb-2">
          <Buttons label='Back to Home' to='/' cssscript={'hobbyBtn'}/>
        </div>
      </div>
      </div>
          </Container>
  )
}

import React from "react";
import { Carousel } from "react-bootstrap"
import dogeating from "../imagenes/dogeating.jpg"
import dog2 from "../imagenes/dog2.jpg"
import dog3 from "../imagenes/dog3.jpg"
import dog4 from "../imagenes/dog4.jpg"

export default function BoostrapCarousel(){
    return(
        <>
              <Carousel className="carouseldesktop">
              <Carousel.Item>
                <img
                  className="dogeating"
                  src={dogeating}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="dog2"
                    src={dog2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="dog3"
                    src={dog3}      
                     alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="dog4"
                    src={dog4}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>4 slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </>
    )
};
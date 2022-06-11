import React from "react";
import { Carousel } from "react-bootstrap"
import dogeating from "../imagenes/dogeating.jpg"

export default function BoostrapCarousel(){
    return(
        <>
              <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
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
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/5706418/pexels-photo-5706418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/688961/pexels-photo-688961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/879788/pexels-photo-879788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
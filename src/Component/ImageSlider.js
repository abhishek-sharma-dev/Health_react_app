import React from "react";
import { Carousel } from "react-bootstrap";

export const ImageSlider = () => {
  return (
    <>
      <Carousel>
        {/* ----------------------- Carousel Item 1 ---------------------- */}
        <Carousel.Item>
          <a
            className="carouselImage"
            href="https://www.happiesthealth.com/articles/food-and-nutrition/food-healthy-bones"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="d-block w-100"
              src="../image/SliderImage1.jpg"
              alt="First slide"
            />
          </a>
        </Carousel.Item>

        {/* ----------------------- Carousel Item 2 ---------------------- */}
        <Carousel.Item>
          <a 
          className="carouselImage"
          href="https://www.happiesthealth.com/articles/gut-microbiome/indian-researchers-develop-ai-tool-understand-gut-microbiome" 
          target="_blank" 
          rel="noreferrer">
            <img
              className="d-block w-100"
              src="../image/SliderImage2.jpg"
              alt="Second slide"
            />
          </a>
        </Carousel.Item>

        {/* ----------------------- Carousel Item 3 ---------------------- */}
        <Carousel.Item>
          <a
           className="carouselImage"
            href="https://www.thegoodbody.com/health-facts/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="d-block w-100"
              src="../image/SliderImage3.jpg"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
        {/* ----------------------- Carousel Item 4 ---------------------- */}
        <Carousel.Item>
          <a
           className="carouselImage"
            href="https://www.happiesthealth.com/articles/neurology/mind-your-head-ways-to-screen-head-injuries"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="d-block w-100"
              src="../image/SliderImage4.jpg"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

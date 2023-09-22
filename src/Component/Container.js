import React from "react";
import { ImageSlider } from "./ImageSlider";
import "../Component/Container.css"
import { Articles } from "./Articles";


export const Container = () => {
  return (
    <>
      <div id="container">
        <div className="carousel">
          <ImageSlider />
        </div>
        {/* --------------------ContainerChild--------------- */}
        <div className="containerChild">
          <Articles/>
        </div>
      </div>
    </>
  );
};

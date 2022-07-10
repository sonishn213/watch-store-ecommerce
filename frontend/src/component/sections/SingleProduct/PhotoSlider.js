import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const PhotoSlider = ({ data }) => {
  return (
    <section className="pt-16 ">
      <div className="fluidContainer lg:px-6">
        <Splide
          aria-label="product images slider"
          options={{
            rewind: true,
            gap: "1rem",
            perPage: "4",
            padding: { left: "4rem", right: "4rem" },
            breakpoints: {
              1024: {
                perPage: 3,
                gap: "1rem",
                padding: { left: "3rem", right: "3rem" },
              },

              768: {
                perPage: 2,
                gap: "1rem",
                padding: { left: "2rem", right: "2rem" },
              },
              640: {
                perPage: 2,
                gap: "0.5rem",
                padding: 0,
              },
            },
          }}
        >
          {data?.map((item, index) => {
            return <Img key={index} src={item} alt={item} />;
          })}
        </Splide>
      </div>
    </section>
  );
};
const Img = ({ src, alt }) => {
  return (
    <SplideSlide>
      <img src={src} alt={alt} className="rounded-md" />
    </SplideSlide>
  );
};
export default PhotoSlider;

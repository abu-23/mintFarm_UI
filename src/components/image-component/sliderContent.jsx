import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="section-container">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img
            className={
              index === activeIndex ? "slide-image" : "slide-image-inactive"
            }
            src={slide.urls}
            alt="Image"
          />
          <div
            className={
              index === activeIndex ? "slide-text" : "slide-text-inactive"
            }
          >
            How To Farm TKN In Trust Wallet?
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;

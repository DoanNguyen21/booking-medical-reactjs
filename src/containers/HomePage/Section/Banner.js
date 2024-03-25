import React, { Component } from "react";
import { connect } from "react-redux";

const images = [
  "https://cdn.bookingcare.vn/fo/2023/11/02/134537-group-12314.png",
  "https://cdn.bookingcare.vn/fo/2024/03/05/150907-banner-xet-nghiem-nipt-1.png",
  "https://cdn.bookingcare.vn/fo/2024/03/15/094346-hoi-dap-cong-dong.png",
  "https://cdn.bookingcare.vn/fo/2023/09/07/141422-144204-dat-lich-kham-bookingcare-pharmacity.jpg",
  "https://cdn.bookingcare.vn/fo/2023/10/10/163557-dat-lich-cham-soc-wecare247.png",
];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="container">
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((imagesUrl, index) => (
            <div
              className="slide"
              key={index}
              style={{
                backgroundImage: `url(${imagesUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slideshow;

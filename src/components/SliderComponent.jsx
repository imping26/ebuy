import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderComponent({ items = [], components: Components }) {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // appendDots: (dots) => {
    //   return (
    //     <div>
    //       <ul
    //         style={{
    //           margin: "0px",
    //           display: "flex",
    //           justifyContent: "center",
    //           gap: "4px",
    //         }}
    //       >
    //         {" "}
    //         {dots}{" "}
    //       </ul>
    //     </div>
    //   );
    // },
    // customPaging: (i) => {
    //   return (
    //     <div
    //       style={{
    //         width: "30px",
    //         height: "4px",
    //         color: "#e4121b",
    //         background: "",
    //         border: "1px #e4121b solid",
    //       }}
    //     ></div>
    //   );
    // },
  };

  return (
    <div className="slider-container pt-5 pb-2">
      {Components ? (
        <Slider {...settings}>
          {items.map((items, index) => {
            return <Components key={index} items={items} />;
          })}
        </Slider>
      ) : null}
    </div>
  );
}

export default SliderComponent;

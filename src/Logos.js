import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@mui/material/Grid";

const Logos = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }, 
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <Grid item xs={4} sm={4} md={12}>
            <img src="images/image50.png" alt="" />
          </Grid>
        </div>
        <div>
          <Grid item xs={4} sm={4} md={12}>
            <img src="images/image51.png" alt="" />
          </Grid>
        </div>
        <div>
          <Grid item xs={6} sm={4} md={12}>
            <img src="images/image52.png" alt="" />
          </Grid>
        </div>
        <div>
          <Grid item xs={6} sm={4} md={12}>
            <img src="images/image53.png" alt="" />
          </Grid>
        </div>
        <div>
          <Grid item xs={6} sm={4} md={12}>
            <img src="images/image54.png" alt="" />
          </Grid>
        </div>
        <div>
          <Grid item xs={6} sm={4} md={12}>
            <img src="images/image55.png" alt="" />
          </Grid>
        </div>
      </Slider>
    </>
  );
};

export default Logos;

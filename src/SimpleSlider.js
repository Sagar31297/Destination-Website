import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ServiceData from './ServicesData';
import CustomCard from './CustomCard';
import Grid from '@mui/material/Grid';

const SimpleSlider = () => {
  const settings = {
    dots: true, // Display dots for navigation
    infinite: true,
    slidesToShow: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
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
        {ServiceData.map((val, id) => (
          <Grid item md={11} key={id}>
            <CustomCard
              image={val.image}
              title={val.title}
              rating={val.rating}
              price={val.price}
            />
          </Grid>
        ))}
      </Slider>
    </>
  );
};

export default SimpleSlider;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderCard from "./SliderCard";
import { Zap } from 'react-feather';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },

    items: 4,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },

  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },

    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },

  tablet: {
    breakpoint: {
      max: 1024,
      min: 200,
    },

    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 30,
  },
};

const FirstSlider = ({ deviceType }) => {

  return (

    <div>
      <h1 class="text-4xl px-9 py-8 flex flex-row items-center text-bookRed"><Zap size={32}/>Recent Populars </h1>
    <div class="bg-bookGreen p-8">
       

      <Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={false} // means to render carousel on server-side.
  infinite={false}
  autoPlay={false}
  keyBoardControl={false}
  customTransition="all .5"
  transitionDuration={2000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={'desktop'}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  afterChange={(previousSlide, { currentSlide, onMove }) => {
    console.log(currentSlide)
      }}
  
      >

       
         <div><SliderCard id={9} /></div>
         <div><SliderCard id={12} /></div>
         <div><SliderCard id={7} /></div>
         <div><SliderCard id={14} /></div>
         <div><SliderCard id={21} /></div>
         <div><SliderCard id={19} /></div>
         <div><SliderCard id={24} /></div>
       
      </Carousel>
      </div>
      </div>
  );
};

export default FirstSlider;

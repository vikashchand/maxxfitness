import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/hero_image.png";
import HeroBack from "../../assets/hero_image_back.png";
import NumberCounter from 'number-counter'

const Hero = () => {
  return (
    <div id='home' className="row m-0 text-white pl-1">
      <div className="left-h mt-5 col-lg-9 col-xlg-9 col-md-12 col-sm-12 col-12">
        <div className="bp"  data-aos='slide-right'>
        <i class="fa-solid fa-dumbbell"></i>
          <span>Trained</span>
          <p>3000+ clients</p>
          
        </div>
        <div className="best-ad">
          <div className="circle"></div>
          <span className="fitness-text">
        MAXIMIZE YOUR FITNESS JOURNEY
          </span>
        </div>
        <div className="title mt-5">
          <span className="header">
            <span className="stroke">YOUR </span> IDEAL SHAPE,
          </span>
          <br />
          <span className="header">OUR MISSION</span>
        </div>
        <p className="mt-3">
        Get in shape with MAX FITNESS's state-of-the-art equipment and tailored fitness programs. Your ideal body awaits!
        </p>
        <br></br>
        <div className="count mt-5 d-flex">
          <div className="mr-5 d-flex flex-column justify-content-center align-items-center">
            <span className="number">
            <NumberCounter end={10} start={3} delay='4' preFix='+' />
            </span>
            <span className="span">COACHES</span>
          </div>
          <div className="mr-5 d-flex flex-column justify-content-center align-items-center">
            <span className="number">
            <NumberCounter end={1022} start={150} delay='4' preFix='+' />
            </span>
            <span className="span">MEMBERS</span>
          </div>
          <div className="mr-5 d-flex flex-column justify-content-center align-items-center">
            <span className="number">
            <NumberCounter end={10} start={0} delay='5' preFix='+' />
            </span>
            <span className="span">PROGRAMS</span>
          </div>
        </div>
        <div className="buttons mt-3 d-flex">
         
          </div>
      </div>
      <div className="right-h mt-5 col-lg-3 col-xlg-3 col-md-12 col-sm-12 col-12">
        <img className="hero-img" src={HeroImg} alt="" />
        <img data-aos='slide-left' className="hero-back" src={HeroBack} alt="" />
        <div data-aos='slide-right' className="heart">
         
          <span></span>
          <p>Ajay Kuliyal</p>
          <p>10+ years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import "./Programs.css";

const Programs = () => {
  return (
    <div id="programs" className="mt-5">
      <div className="heading">
        <p data-aos="slide-right" className="m-0 stroke">
          EXPLORE OUR{" "}
        </p>
        <p data-aos="slide-left" className="m-0 stroke">
          {" "}
          PROGRAMS
        </p>
        <p data-aos="slide-right" className="m-0 stroke">
          TO SHAPE YOU
        </p>
      </div>
      <div className="row p-3">
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          <div data-aos="slide-right" className="box">
            <i className="fa-solid fa-fire-flame-curved"></i>
            <p>
              This program is designed to torch fat and help you lose weight
              effectively through a mix of cardio and strength exercises.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          <div data-aos="slide-left" className="box">
            <i className="fa-solid fa-person-running"></i>
            <p>
              Join our high-energy aerobic sessions to improve stamina and burn
              calories in 20 to 30-minute routines.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          <div data-aos="slide-right" className="box">
            <i className="fa-solid fa-dumbbell"></i>
            <p>
              Strengthen your muscles and improve endurance with our
              comprehensive weightlifting and resistance training program.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          <div data-aos="slide-left" className="box">
            <i className="fa-solid fa-heart-pulse"></i>
            <p>
              Practice yoga to enhance flexibility, relieve stress, and
              rejuvenate your mind and body.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;

//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { Component, Fragment } from "react";
import adventure from "../../assets/adventure.png"
//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style
import "./about_us.css";
import { render } from "@testing-library/react";
import Image from "react-bootstrap/Image";
import { founderPicUrl, scrollspyFirst, scrollspySecond } from "./constants";

const about_us = () => {

  return(
  <Fragment>
    <div className=" bg-info bg-gradient p-4 p-md-5">
      <div className="container-fluid text-center">
          <h1 className="display-3 fw-semibold">Join us for a whole new adventure!</h1>
      </div>
    </div>


    <div className="row p-2">
  <div className="col-4">
    <div id="list-example" className="list-group">
      <a className="list-group-item list-group-item-action" href="#list-item-1">Our Mission</a>
      <a className="list-group-item list-group-item-action" href="#list-item-2">Our Vision</a>
      <a className="list-group-item list-group-item-action" href="#list-item-3">Our Background</a>
      <a className="list-group-item list-group-item-action" href="#list-item-4">Our Founders</a>
    </div>
  </div>
  <div className="col-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
      <h4 id="list-item-1" className="text-center">Our Mission</h4>
      <div className="container">
        <div className="col">
          <Image src={adventure} className="rounded float-start p-3 container-fluid" height={400}/>
        </div>
          <div className="col">
            <h1 className="display-5 fw-semibold">Enjoy your fantastic tours and vacations</h1>
            <p className="fs-4">{scrollspyFirst.text}</p>
          </div>
      </div>
      <h4 id="list-item-2" className="text-center">Our Vision</h4>
      <div className="container">
        <div className="col">
          <Image src={adventure} className="rounded float-start p-3 container-fluid" height={400}/>
        </div>
          <div className="col">
            <h1 className="display-5 fw-semibold">Enjoy your fantastic tours and vacations</h1>
            <p className="fs-4">{scrollspySecond.text}</p>
          </div>
      </div>
      <h4 id="list-item-3" className="text-center">Our Background</h4>
      <div className="container">
        <div className="col">
          <Image src={adventure} className="rounded float-start p-3 container-fluid" height={400}/>
        </div>
          <div className="col">
            <h1 className="display-5 fw-semibold">Enjoy your fantastic tours and vacations</h1>
            <p className="fs-4">{scrollspySecond.text}</p>
          </div>
      </div>
      <h4 id="list-item-4" className="text-center">Our Founders</h4>
      <div className="container row align-items-center">
        {founderPicUrl.map((pics) => (
          <div className="col">
            <Image src={pics.picUrl} className="rounded float-start p-3 container-fluid"/>
            <p className="fs-6 text-center">{pics.picName}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    
  </Fragment>
  
  );
};

// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default about_us;

//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { Component, Fragment, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import hamburgericon from "../../assets/hamburger.png";

//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style
import "./NavigationBar.scss";
import { Collapse } from "react-bootstrap";

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

const NavigationBar = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const windowSize = useWindowSize();

  return (
    <Fragment>
      <div className="p-3 navbar-background">
        <div className="d-flex align-items-center">
          <span className="navbar-title px-3">Mitra Nusantara</span>
        </div>

        {windowSize.width > 1200 && (
          <div className="navbar-options-container px-3">
            <div className="px-4">Home</div>
            <div className="px-4">About Us</div>
            <div className="px-4">Booking</div>
            <div className="px-4 py-2 mx-2 navbar-login-btn">Login</div>
          </div>
        )}

        {windowSize.width < 1200 && (
          <Fragment>
            <div
              className="navbar-hamburg-icon p-3 mx-2"
              onClick={() => {
                setDropdownIsOpen(!dropdownIsOpen);
              }}
            >
              <Image className="hamburg-img" src={hamburgericon} fluid />
            </div>
            <Collapse in={dropdownIsOpen}>
              <div className="navbar-dropdown-container">
                <div className="navbar-dropdown">
                  <p className="navbar-dropdown-item m-0">Home</p>
                  <p className="navbar-dropdown-item m-0">About Us</p>
                  <p className="navbar-dropdown-item m-0">Booking</p>
                  <p className="navbar-dropdown-item m-0">Login</p>
                </div>

                {/* Outer area for navbar */}
                {/* <div
                  className="outer-area-navbar-dropdown"
                  onClick={() => {
                    setDropdownIsOpen(!dropdownIsOpen);
                  }}
                ></div> */}
              </div>
            </Collapse>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default NavigationBar;

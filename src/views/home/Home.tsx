//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { Component, Fragment, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
//  Region Import Constants

//  Region Import Interfaces

//  Region Import Redux Action Type and Redux Action

//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style
import "./Home.scss";
import { Card, Col, Row } from "react-bootstrap";
import { placeholderProductPage } from "./constants";
import star from "../../assets/star.png";

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

const Home = () => {
  //  react lifecycle (componentDidMount, componentDidUpdate, getDerivedStateFromProps, etc)

  //  onHandleFunction declaration

  //  render

  // props destruction

  // state destruction

  // other variables if needed
  const windowSize = useWindowSize();

  return (
    <Fragment>
      <div className="p-4 home-page">
        <div>
          <div className="product-row-header d-flex justify-content-between align-items-center mb-3">
            <p className="product-row-title m-0">Most popular attractions</p>
            <div className="px-4 py-2 product-row-sm-btn">Show More</div>
          </div>
          <div className="row-1-container">
            {placeholderProductPage.map((prd, prdIdx) => {
              const imgWidth = windowSize.width > 1200 ? 400 : 250;
              return (
                <div className="product-card">
                  <Card>
                    <div>
                      <Image width={imgWidth} src={prd.img} />
                    </div>
                    <div className="p-3">
                      <p
                        className={
                          "prdct-title" +
                          (windowSize.width > 1200 ? "" : "-small")
                        }
                      >
                        {prd.title}
                      </p>
                      <p
                        className={
                          "prdct-location" +
                          (windowSize.width > 1200 ? "" : "-small")
                        }
                      >
                        {prd.regency}, {prd.city}
                      </p>

                      <div className="d-flex align-items-center">
                        <Image width={20} height={20} src={star} />
                        <span
                          className={
                            "prdct-rating" +
                            (windowSize.width > 1200 ? "" : "-small")
                          }
                        >
                          {prd.rating} ({prd.ratingCount})
                        </span>
                      </div>

                      <p
                        className={
                          "prdct-price" +
                          (windowSize.width > 1200 ? "" : "-small")
                        }
                      >
                        Rp. {prd.price}
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// mapStateToProps here if needed

// mapDispatchToProps here if needed

export default Home;

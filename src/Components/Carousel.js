import React, { Component } from "react";


export default class Carousel extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleIndicators"
          className="carousel slide mt-3"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="http://placehold.it/900x350" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="http://placehold.it/900x350" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="http://placehold.it/900x350" className="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </>
    );
  }
}

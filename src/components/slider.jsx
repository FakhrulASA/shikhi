import React, { Component } from "react";
import foot from "../images/c1.png";
import foot2 from "../images/c2.png";
import foot3 from "../images/c3.png";
class Slider extends Component {
  state = {};
  render() {
    return (
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={foot2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text-danger">
                <strong>Live Classes</strong>
              </h2>
              <h5>
                Join live class with trainers in meet, zoom and learn with
                direct interaction.
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={foot} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text-danger">
                <strong>Start from Basic</strong>
              </h2>
              <h5>
                Learn any language from the basic so that you can understand
                your best.
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={foot3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2 class="text-danger">
                <strong>Create and Earn</strong>
              </h2>
              <h5>
                By learning a specific development you can jump into projects
                and start earning.
              </h5>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Slider;

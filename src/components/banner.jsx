import React, { Component } from "react";
import foot from "../images/android.png";
import foot2 from "../images/web.png";
import foot3 from "../images/python.png";
class Banner extends Component {
  state = {};
  render() {
    return (
      <div class="d-flex flex-sm-row flex-column  justify-content-around  ">
        <div class="p-3 flex-fill card  bg-light mt-4 ml-1 mr-1 ">
          <img src={foot} class="d-block w-100" alt="..." />

          <div class="card-body">
            <h5 class="card-title">
              <strong>Stack: Java, XML, Firebase</strong>
            </h5>
            <p class="card-text text-justify">
              After completing this course you will learn how build native
              android application using Java and XML with Android Studio.
            </p>
            <a href="#" class="btn bg-success p-2">
              <h6 class="text-white p-1">
                <strong>View android course</strong>
              </h6>
            </a>
          </div>
        </div>
        <div class="p-3 flex-fill card  bg-light mt-4 ml-1 mr-1">
          <img src={foot2} class="d-block w-100" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <strong>Stack: HTML, CSS, JavaScript and Basic Node.js</strong>
            </h5>
            <p class="card-text text-justify">
              After completing this course you will learn how build web and web
              application using HTML and CSS with JavaScript.
            </p>
            <a href="#" class="btn bg-warning p-2">
              <h6 class="text-white p-1">
                <strong>View web course</strong>
              </h6>
            </a>
          </div>
        </div>
        <div class="p-3 flex-fill card  bg-light mt-4 ml-1 mr-1">
          <img src={foot3} class="d-block w-100" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <strong>Stack: Python 3.7, Tensorflow and CNN</strong>
            </h5>
            <p class="card-text text-justify">
              After completing this course you will learn to build research
              projects using python and also python programming.
            </p>
            <a href="#" class="btn bg-primary p-2">
              <h6 class="text-white p-1">
                <strong>View python course</strong>
              </h6>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;

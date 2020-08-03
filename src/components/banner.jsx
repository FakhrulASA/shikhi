import React, { Component } from "react";

class Banner extends Component {
  state = {};
  render() {
    return (
      <div class="d-flex flex-sm-row flex-column  justify-content-around  ">
        <div class="p-2 flex-fill card  bg-light mt-4 ml-1 mr-1 ">
          <h5 class="card-header bg-danger text-white ">Android Development</h5>
          <div class="card-body">
            <h5 class="card-title">Stack: Java, XML, Firebase</h5>
            <p class="card-text text-justify">
              After completing this course you will learn how build native
              android application using Java and XML with Android Studio.
            </p>
            <a href="#" class="btn btn-dark p-2">
              View android course
              <svg
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="p-2 flex-fill card  bg-light mt-4 ml-1 mr-1">
          <h5 class="card-header bg-danger text-white">Web Development</h5>
          <div class="card-body">
            <h5 class="card-title">
              Stack: HTML, CSS, JavaScript and Basic Node.js
            </h5>
            <p class="card-text text-justify">
              After completing this course you will learn how build web and web
              application using HTML and CSS with JavaScript.
            </p>
            <a href="#" class="btn btn-dark p-2">
              View web course
              <svg
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="p-2 flex-fill card  bg-light mt-4 ml-1 mr-1">
          <h5 class="card-header bg-danger text-white">Python Development</h5>
          <div class="card-body">
            <h5 class="card-title">Stack: Python 3.7, Tensorflow and CNN</h5>
            <p class="card-text text-justify">
              After completing this course you will learn to build research
              projects using python and also python programming.
            </p>
            <a href="#" class="btn btn-dark p-2">
              View python course
              <svg
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;

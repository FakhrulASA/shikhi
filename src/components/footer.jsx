import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div class="mt-4">
        <div class="d-flex flex-sm-row flex-column  justify-content-around h-auto bg-dark p-2 text-center">
          <div class="text-center">
            <h4 class="text-white text-danger mb-3 mt-3">
              <strong>Get Started</strong>
            </h4>
            <ul class="list-unstyled m-2 text-center mb-3">
              <li>
                <a class="text-white" href="assd.com">
                  <h6 class="text-white">Privacy and Policy</h6>
                </a>
              </li>
              <li>
                <h6 class="text-white">
                  <a class="text-white" href="assd.com">
                    Terms and Conditions
                  </a>
                </h6>
              </li>
              <li>
                <a class="text-white" href="assd.com">
                  <h6 class="text-white">Rules</h6>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-white text-danger mb-3 mt-3">
              <strong>Story</strong>
            </h4>
            <ul class="list-unstyled m-2 text-center mb-3">
              <li>
                <a class="text-white" href="assd.com">
                  <h6 class="text-white">Why we started?</h6>
                </a>
              </li>
              <li>
                <a class="text-white" href="assd.com">
                  <h6 class="text-white">Team</h6>
                </a>
              </li>
              <li>
                <a class="text-white" href="assd.com">
                  <h6 class="text-white">Goals and Dream</h6>
                </a>
              </li>
            </ul>
          </div>
          <div class="text-center ">
            <h4 class="text-white text-danger mb-3 mt-3">
              <strong>Join Us</strong>
            </h4>
            <ul class="list-unstyled m-2 text-center mb-3">
              <li>
                <a class="text-white" href="assd.com">
                  <h6 class="text-white">Career Options</h6>
                </a>
              </li>
              <li>
                <a class="text-white" href="assd.com">
                  <h6 class="text-white">Ask Us</h6>
                </a>
              </li>
              <li>
                <a class="text-white" href="assd.com">
                  <h6 class="text-white">Contribute</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p class="text-center">© shikhi.codes, Team. All rights reserved.</p>
      </div>
    );
  }
}

export default Footer;

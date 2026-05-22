import React from 'react'
import Navbar from '../Home/Navbar'
function Destination() {
  return (
    <div>
            <main class="destination-content">
      {/* <!-- navbar --> */}
      <Navbar/>
      {/* <nav class="navbar">
        <div class="logo">
          <img src="assets/shared/logo.svg" alt="logo" />
        </div>
          <hr class="nav-hr" />
        <ul class="nav-links">
          <li><a href="index.html">00 Home</a></li>
          <li><a href="destination.html">01 Destination</a></li>
          <li><a href="crew.html">02 Crew</a></li>
          <li><a href="technology.html">03 Technology</a></li>
        </ul>
      </nav> */}
      <div class="page-content">
        {/* <!-- content --> */}
        <h2 id="destination-title">01 PICK YOUR DESTINATION</h2>
        <div class="content-2">
          <div class="destination-image">
            <img id="image-destination" src="assets/destination/image-moon.png" alt="Moon" />
          </div>
          <div class="destination-info">
            <div class="change-destination">
              <button class="moon-button active" data-destination="Moon">
                MOON
              </button>
              <button class="mars-button" data-destination="Mars">
                MARS
              </button>
              <button class="europa-button" data-destination="Europa">
                EUROPA
              </button>
              <button class="titan-button" data-destination="Titan">
                TITAN
              </button>
            </div>
            <h1 id="name-destination">MOON</h1>
            <p class="description" id="description">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <hr class="destination-hr" />
            <div class="destination-meta">
              <div class="distance">
                <h5>AVG. DISTANCE</h5>
                <p id="distance">384,400 KM</p>
              </div>
              <div class="travel-time">
                <h5>EST. TRAVEL TIME</h5>
                <p id="travel">3 DAYS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    </div>
  )
}

export default Destination
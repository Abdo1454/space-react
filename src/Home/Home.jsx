import React from 'react'
import Navbar from './Navbar';

function Home() {
  return (
    <div>
         <main class="home-content">
            <Navbar/>
      {/* <!-- navbar -->
      <nav class="navbar">
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
      <div class="page-content-1">
        {/* <!-- content --> */}
        <div class="content">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        {/* <!-- explore-content --> */}
        <div class="explore-content">
          <button class="explore-button">EXPLORE</button>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Home;
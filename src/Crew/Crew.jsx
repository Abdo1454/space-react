import React from 'react'
import Navbar from '../Home/Navbar'

function Crew() {
  return (
    <div>
            <main class="crew-content">
      {/* <!-- navbar --> */}
    <Navbar/>
      <div class="page-content-3">
        {/* <!-- content --> */}
        <h2 id="crew-title"> <span class="two-page" > 02</span> MEET YOUR CREW</h2>
        <div class="content-3">
            <div class="crew-info">
                <h3 class="role" id="role" data-role="Commander">COMMANDER</h3>
                <h1 class="name-crew" id="name-crew">DOUGLAS HURLEY</h1>
                <p class="description" id="bio">
                    Douglas Gerald Hurley is an American engineer, retired Marine Corps
                    pilot, and former NASA astronaut. He launched into space for the
                    third time as commander of Crew Dragon Demo-2.
                </p>
                <div class="circule-control">
                    <button class="douglas-button active" id="crew-id-1" ></button>
                    <button class="mark-button" id="crew-id-2" ></button>
                    <button class="victor-button" id="crew-id-3" ></button>
                    <button class="anousheh-button" id="crew-id-4" ></button>
                </div>
            </div>
            <div class="crew-image">
              <img id="image-crew" src="assets/crew/image-douglas-hurley.png" alt="Douglas Hurley" />
            </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default Crew
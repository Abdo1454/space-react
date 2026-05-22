import React from 'react'
import Navbar from '../Home/Navbar'
function Tech() {
  return (
    <div>
           <main class="tech-content">
      {/* <!-- navbar --> */}
    <Navbar/>
      <div class="big-content-4">
          
          <div class="content-4">
              <div class="control-tech">
                <button class="tech-control active-4" data-id="1" id="tech-control-1">1</button>
      
                <button class="tech-control" data-id="2" id="tech-control-2">2</button>
      
                <button class="tech-control" data-id="3" id="tech-control-3">3</button>
              </div>
              <div class="text-content-4">

                  <h2>THE TERMINOLOGY...</h2>
    
              <h1 id="name-tech">LAUNCH VEHICLE</h1>
    
              <p id="text-tech">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually to
                Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
                in operation. Standing 150 metres tall, it's quite an awe-inspiring
                sight on the launch pad!
              </p>
                </div>
        </div>

        <div class="img-content-4">
          <img
            id="image-tech"
            src="assets/technology/image-launch-vehicle-portrait.jpg"
            alt="launch vehicle"
          />
        </div>
      </div>
    </main>

    </div>
  )
}

export default Tech;
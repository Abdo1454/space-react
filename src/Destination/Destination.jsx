import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";

function Destination() {
  const [destination, setDestination] = useState([]);
  const [currentDestination, setCurrentDestination] = useState(0);

  // fetch data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDestination(data.destinations);
      });
  }, []);

  // loading
  if (destination.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="destination-content">
      {/* navbar */}
      <Navbar />

      <div className="page-content">
        <h2 id="destination-title">
         <span> 01 </span> PICK YOUR DESTINATION
        </h2>

        <div className="content-2">
          {/* image */}
          <div className="destination-image">
            <img
              id="image-destination"
              src={destination[currentDestination].images.webp}
              alt={destination[currentDestination].name}
            />
          </div>

          {/* info */}
          <div className="destination-info">
            {/* buttons */}
            <div className="change-destination">
              {destination.map((item, index) => (
                <button
                  key={index}
                  className={`mars-button ${
                    currentDestination === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentDestination(index)}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <h1 id="name-destination">
              {destination[currentDestination].name}
            </h1>

            <p className="description" id="description">
              {destination[currentDestination].description}
            </p>

            <hr className="destination-hr" />

            <div className="destination-meta">
              <div className="distance">
                <h5>AVG. DISTANCE</h5>

                <p id="distance">
                  {destination[currentDestination].distance}
                </p>
              </div>

              <div className="travel-time">
                <h5>EST. TRAVEL TIME</h5>

                <p id="travel">
                  {destination[currentDestination].travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Destination;
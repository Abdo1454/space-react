import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";

function Crew() {
  const [crew, setCrew] = useState([]);
  const [currentCrew, setCurrentCrew] = useState(0);

  // fetch data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCrew(data.crew);
      });
  }, []);

  // loading
  if (crew.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="crew-content">
      {/* navbar */}
      <Navbar />

      <div className="page-content-3">
        <h2 id="crew-title">
          <span className="two-page">02</span> MEET YOUR CREW
        </h2>

        <div className="content-3">
          {/* info */}
          <div className="crew-info">
            <h3 className="role" id="role">
              {crew[currentCrew].role}
            </h3>

            <h1 className="name-crew" id="name-crew">
              {crew[currentCrew].name}
            </h1>

            <p className="description" id="bio">
              {crew[currentCrew].bio}
            </p>

            {/* buttons */}
            <div className="circule-control">
              {crew.map((item, index) => (
                <button
                  key={index}
                  className={currentCrew === index ? "active" : ""}
                  onClick={() => setCurrentCrew(index)}
                ></button>
              ))}
            </div>
          </div>

          {/* image */}
          <div className="crew-image">
            <img
              id="image-crew"
              src={crew[currentCrew].images.png}
              alt={crew[currentCrew].name}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Crew;
import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";

function Tech() {
  const [technology, setTechnology] = useState([]);
  const [currentTech, setCurrentTech] = useState(0);

  // fetch data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnology(data.technology);
      });
  }, []);

  // لو الداتا لسه محملتش
  if (technology.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="tech-content">
      {/* navbar */}
      <Navbar />

      <div className="big-content-4">
        <div className="content-4">
          {/* buttons */}
          <div className="control-tech">
            {technology.map((item, index) => (
              <button
                key={index}
                className={`tech-control ${
                  currentTech === index ? "active-4" : ""
                }`}
                onClick={() => setCurrentTech(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* text */}
          <div className="text-content-4">
            <h2>THE TERMINOLOGY...</h2>

            <h1 id="name-tech">
              {technology[currentTech].name}
            </h1>

            <p id="text-tech">
              {technology[currentTech].description}
            </p>
          </div>
        </div>

        {/* image */}
        <div className="img-content-4">
          <img
            id="image-tech"
            src={technology[currentTech].images.portrait}
            alt={technology[currentTech].name}
          />
        </div>
      </div>
    </main>
  );
}

export default Tech;
import React from "react";
import "./TopCars.css";
import cars from "../data/cars";

const TopCars = () => {
  return (
    <>
    <div>
      <div className="topcars">
        <h2>Top Cars in Bangalore</h2>
      </div>
        <div className="cars">
          {cars.map((car) => (
            <div key={car.id}>
              <img src={car.image} alt={car.name} width="200px"/>

              <div className="card-content">
                <h3>{car.name}</h3>

                <p>
                   {car.rating} ({car.reviews})
                </p>

                <p>
                  {car.transmission} • {car.fuel} • {car.seats} Seats
                </p>

                <p>{car.distance} away</p>

                <h4>₹{car.price}/hr</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopCars;
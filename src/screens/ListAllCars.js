import React, { useCallback, useEffect, useState } from "react";
import CarDataService from "../services/carServices";
import { Link } from "react-router-dom";

const CarsList = () => {
  const [searchPlate, setSearchPlate] = useState("");

  const [cars, setCars] = useState([]);

  const [currentCar, setCurrentCar] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(-1);

  const onChangeSearchPlate = (e) => {
    setSearchPlate(e.target.value);
  };

  const retrieveCars = useCallback(() => {
    CarDataService.getAll()
      .then((response) => {
        setCars(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => retrieveCars(), [retrieveCars]);

  const refreshList = () => {
    retrieveCars();
    setCurrentCar(null);
    setCurrentIndex(-1);
  };

  const setActiveCar = (car, index) => {
    setCurrentCar(car);
    setCurrentIndex(index);
  };

  const removeAllCars = () => {
    CarDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const changeSearchPlate = () => {
    setCurrentCar(null);
    setCurrentIndex(-1);

    CarDataService.findCarByPlate(searchPlate)
      .then((response) => {
        setCars(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by plate"
            value={searchPlate}
            onChange={onChangeSearchPlate}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={changeSearchPlate}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Cars List</h4>

        <ul className="list-group">
          {cars &&
            cars.map((car, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveCar(car, index)}
                key={index}
              >
                {car.plate}
              </li>
            ))}
        </ul>

        <button className="m-3 btn btn-sm btn-danger" onClick={removeAllCars}>
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentCar ? (
          <div>
            <h4>Car</h4>
            <div>
              <label>
                <strong>Plate:</strong>
              </label>{" "}
              {currentCar.plate}
            </div>
            <div>
              <label>
                <strong>Color:</strong>
              </label>{" "}
              {currentCar.color}
            </div>
            <div>
              <label>
                <strong>Model:</strong>
              </label>{" "}
              {currentCar.model}
            </div>
            <div>
              <label>
                <strong>Brand:</strong>
              </label>{" "}
              {currentCar.brand}
            </div>
            <div>
              <label>
                <strong>Chassis:</strong>
              </label>{" "}
              {currentCar.chassis}
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Car...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsList;

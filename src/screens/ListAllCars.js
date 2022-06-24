import React, { useEffect, useState } from "react";
import CarDataService from "../services/carServices";
import { Link } from "react-router-dom";

const CarsList = (cars, currentCar, currentIndex) => {
  const [state, setState] = useState({
    cars: [],
    currentCar: null,
    currentIndex: -1,
    searchPlate: "",
  });

  const onChangeSearchPlate = (e) => {
    setState({
      ...state,
      searchPlate: e.target.value,
    });
  };

  const retrieveCars = () => {
    CarDataService.getAll()
      .then((response) => {
        setState({
          ...state,
          cars: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => retrieveCars());

  const refreshList = () => {
    retrieveCars();
    setState({
      ...state,
      currentCar: null,
      currentIndex: -1,
    });
  };

  const setActiveCar = (car, index) => {
    this.setState({
      currentCar: car,
      currentIndex: index,
    });
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

  const searchPlate = () => {
    setState({
      ...state,
      currentCar: null,
      currentIndex: -1,
    });

    CarDataService.findCarByPlate(state.searchPlate)
      .then((response) => {
        setState({
          cars: response.data,
        });
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
              onClick={searchPlate}
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

            <Link to={"/cars/" + currentCar.id} className="badge badge-warning">
              Edit
            </Link>
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
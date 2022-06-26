import React, { useCallback, useEffect, useState } from "react";
import CarDataService from "../services/carServices";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const Car = () => {
  const [message, setMessage] = useState("");
  const [currentCar, setCurrentCar] = useState({
    id: null,
    plate: "",
    color: "",
    model: "",
    brand: "",
    chassis: "",
  });
  let history = useNavigate();
  let { id } = useParams();

  const onChangePlate = (e) => {
    const plate = e.target.value;

    setCurrentCar(function (prevState) {
      return {
        ...prevState.currentCar,
        plate: plate,
      };
    });
  };

  const onChangeColor = (e) => {
    const color = e.target.value;

    setCurrentCar((prevState) => ({
      ...prevState.currentCar,
      color: color,
    }));
  };

  const onChangeModel = (e) => {
    const model = e.target.value;

    setCurrentCar(function (prevState) {
      return {
        ...prevState.currentCar,
        model: model,
      };
    });
  };

  const onChangeBrand = (e) => {
    const brand = e.target.value;

    setCurrentCar((prevState) => ({
      ...prevState.currentCar,
      brand: brand,
    }));
  };
  const onChangeChassis = (e) => {
    const chassis = e.target.value;

    setCurrentCar(function (prevState) {
      return {
        ...prevState.currentCar,
        chassis: chassis,
      };
    });
  };

  const getCar = useCallback((id) => {
    CarDataService.get(id)
      .then((response) => {
        setCurrentCar(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => getCar(id), []);

  return (
    <div>
      {currentCar ? (
        <div className="edit-form">
          <h4>Car</h4>
          <form>
            <div className="form-group">
              <label htmlFor="plate">Plate</label>
              <input
                type="text"
                className="form-control"
                id="plate"
                value={currentCar.plate}
                onChange={onChangePlate}
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                className="form-control"
                id="color"
                value={currentCar.color}
                onChange={onChangeColor}
              />
            </div>

            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                className="form-control"
                id="model"
                value={currentCar.model}
                onChange={onChangeModel}
              />
            </div>
            <div className="form-group">
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                value={currentCar.brand}
                onChange={onChangeBrand}
              />
            </div>
            <div className="form-group">
              <label htmlFor="chassis">Chassis</label>
              <input
                type="text"
                className="form-control"
                id="chassis"
                value={currentCar.chassis}
                onChange={onChangeChassis}
              />
            </div>
          </form>
          </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Car...</p>
        </div>
      )}
    </div>
  );
};

export default Car;

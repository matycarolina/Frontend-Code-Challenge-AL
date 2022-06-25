import React, { useEffect, useState } from "react";
import CarDataService from "../services/carServices";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const Car = (currentCar) => {
  const [state, setState] = useState({
    currentCar: {
      id: null,
      plate: "",
      color: "",
      model: "",
      brand: "",
      chassis: "",
    },
    message: "",
  });
  let history = useNavigate();
  let { id } = useParams();

  const onChangePlate = (e) => {
    const plate = e.target.value;

    setState(function (prevState) {
      return {
        currentCar: {
          ...prevState.currentCar,
          plate: plate,
        },
      };
    });
  };

  const onChangeColor = (e) => {
    const color = e.target.value;

    setState((prevState) => ({
      currentCar: {
        ...prevState.currentCar,
        color: color,
      },
    }));
  };

  const onChangeModel = (e) => {
    const model = e.target.value;

    setState(function (prevState) {
      return {
        currentCar: {
          ...prevState.currentCar,
          model: model,
        },
      };
    });
  };

  const onChangeBrand = (e) => {
    const brand = e.target.value;

    setState((prevState) => ({
      currentCar: {
        ...prevState.currentCar,
        brand: brand,
      },
    }));
  };
  const onChangeChassis = (e) => {
    const chassis = e.target.value;

    setState(function (prevState) {
      return {
        currentCar: {
          ...prevState.currentCar,
          chassis: chassis,
        },
      };
    });
  };

  const getCar = (id) => {
    CarDataService.get(id)
      .then((response) => {
        setState({
          currentCar: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => getCar(id), []);

  const updateCar = () => {
    CarDataService.update(state.currentCar.id, state.currentCar)
      .then((response) => {
        console.log(response.data);
        setState({
          message: "The car was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteCar = () => {
    CarDataService.delete(state.currentCar.id)
      .then((response) => {
        console.log(response.data);
        history("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

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

          <button className="badge badge-danger mr-2" onClick={deleteCar}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateCar}
          >
            Update
          </button>
          <p>{state.message}</p>
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
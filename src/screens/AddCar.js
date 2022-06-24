import React, { useState } from "react";
import CarDataService from "../services/carServices";

const AddCar = () => {
  const [state, setState] = useState({
    id: null,
    plate: "",
    color: "",
    model: "",
    brand: "",
    chassis: "",
    submitted: false,
  });

  const onChangePlate = (e) => {
    setState({
      ...state,
      plate: e.target.value,
    });
  };
  const onChangeColor = (e) => {
    setState({
      ...state,
      color: e.target.value,
    });
  };
  const onChangeModel = (e) => {
    setState({
      ...state,
      model: e.target.value,
    });
  };
  const onChangeBrand = (e) => {
    setState({
      ...state,
      brand: e.target.value,
    });
  };
  const onChangeChassis = (e) => {
    setState({
      ...state,
      chassis: e.target.value,
    });
  };

  const saveCar = () => {
    var data = {
      plate: state.plate,
      color: state.color,
      model: state.model,
      brand: state.brand,
      chassis: state.chassis,
    };

    CarDataService.create(data)
      .then((response) => {
        setState({
          ...state,
          id: response.data.id,
          plate: response.data.plate,
          color: response.data.color,
          model: response.data.model,
          brand: response.data.brand,
          chassis: response.data.chassis,
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newCar = () => {
    setState({
      ...state,
      id: null,
      plate: "",
      color: "",
      model: "",
      brand: "",
      chassis: "",
      submitted: false,
    });
  };

  return (
    <div className="submit-form">
      {state.submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCar}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="plate">Plate</label>
            <input
              type="text"
              className="form-control"
              id="plate"
              required
              value={state.plate}
              onChange={onChangePlate}
              name="plate"
            />
          </div>

          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              type="text"
              className="form-control"
              id="color"
              required
              value={state.color}
              onChange={onChangeColor}
              name="color"
            />
          </div>

          <div className="form-group">
            <label htmlFor="model">Model</label>
            <input
              type="text"
              className="form-control"
              id="model"
              required
              value={state.model}
              onChange={onChangeModel}
              name="model"
            />
          </div>

          <div className="form-group">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              className="form-control"
              id="brand"
              required
              value={state.brand}
              onChange={onChangeBrand}
              name="brand"
            />
          </div>

          <div className="form-group">
            <label htmlFor="chassis">Chassis</label>
            <input
              type="text"
              className="form-control"
              id="chassis"
              required
              value={state.chassis}
              onChange={onChangeChassis}
              name="chassis"
            />
          </div>

          <button onClick={saveCar} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCar;
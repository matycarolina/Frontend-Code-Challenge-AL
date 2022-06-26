import React, { useState } from "react";
import CarDataService from "../services/carServices";

const AddCar = () => {
  const [id, setId] = useState(null)
  const [plate, setPlate] = useState("")
  const [color, setColor] = useState("")
  const [model, setModel] = useState("")
  const [brand, setBrand] = useState("")
  const [chassis, setChassis] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onChangePlate = (e) => {
    setPlate(e.target.value)
  };
  const onChangeColor = (e) => {
    setColor(e.target.value)
  };
  const onChangeModel = (e) => {
    setModel(e.target.value)
  };
  const onChangeBrand = (e) => {
    setBrand(e.target.value)
  };
  const onChangeChassis = (e) => {
    setChassis(e.target.value)
  };

  const saveCar = () => {
    var data = {
      plate: plate,
      color: color,
      model: model,
      brand: brand,
      chassis: chassis,
    };

    CarDataService.create(data)
      .then((response) => {
        setId(response.data.id)
        setPlate(response.data.plate)
        setColor(response.data.color)
        setModel(response.data.model)
        setBrand(response.data.brand)
        setChassis(response.data.chassis)
        setSubmitted(true)
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newCar = () => {
    setId(null)
        setPlate("")
        setColor("")
        setModel("")
        setBrand("")
        setChassis("")
        setSubmitted(false)
  };

  return (
    <div className="submit-form">
      {submitted ? (
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
              value={plate}
              onChange={onChangePlate}
              name="plate"
              placeholder="ABC-1234"
            />
          </div>

          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              type="text"
              className="form-control"
              id="color"
              required
              value={color}
              onChange={onChangeColor}
              name="color"
              placeholder="RED"
            />
          </div>

          <div className="form-group">
            <label htmlFor="model">Model</label>
            <input
              type="text"
              className="form-control"
              id="model"
              required
              value={model}
              onChange={onChangeModel}
              name="model"
              placeholder="SEDAN"
            />
          </div>

          <div className="form-group">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              className="form-control"
              id="brand"
              required
              value={brand}
              onChange={onChangeBrand}
              name="brand"
              placeholder="KIA"
            />
          </div>

          <div className="form-group">
            <label htmlFor="chassis">Chassis</label>
            <input
              type="text"
              className="form-control"
              id="chassis"
              required
              value={chassis}
              onChange={onChangeChassis}
              name="chassis"
              placeholder="1HGBH41JXMN109186"
            />
          </div>
<br/>
          <button onClick={saveCar} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCar;
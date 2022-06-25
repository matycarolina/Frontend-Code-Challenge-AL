import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CarsList from "./screens/ListAllCars";
import AddCar from "./screens/AddCar";
import Car from "./screens/GetCar";

export const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Code Challenge
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path="/" element={<CarsList/>} />
          <Route exact path="/add" element={<AddCar />} />
          <Route path="/cars/:id" element={<Car/>} />
        </Routes>
      </div>
    </div>
  );
};


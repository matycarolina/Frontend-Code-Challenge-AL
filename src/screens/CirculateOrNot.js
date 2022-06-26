import React, { useState } from "react";

export const CirculateOrNot = () => {
  const [plate, setPlate] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const digitsPerDay = [[], [1, 2], [3, 4], [5, 6], [7, 8], [9, 0], []];
  const notPermitedRanges = [
    ["07:00", "09:30"],
    ["16:00", "19:30"],
  ];

  const hourInRange = (time, ranges) => {
    return time >= ranges[0] && time <= ranges[1];
  };

  const picoPlacaPredictor = (plate, date, time) => {
    const plateLastDigit = parseInt(plate[plate.length - 1]);
    const day = new Date(date).getDay();
    const restrictedPlates = digitsPerDay[day];

    if (
      hourInRange(time, notPermitedRanges[0]) ||
      hourInRange(time, notPermitedRanges[1])
    ) {
      return restrictedPlates.indexOf(plateLastDigit) >= 0;
    }
    return false;
  };

  const onChangePlate = (e) => {
    setPlate(e.target.value);
  };
  const onChangeTime = (e) => {
    setTime(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
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
        <label htmlFor="date">Date</label>
        <input
          type="text"
          className="form-control"
          id="date"
          required
          value={date}
          onChange={onChangeDate}
          name="date"
          placeholder="MM/DD/YYYY"
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input
          type="text"
          className="form-control"
          id="time"
          required
          value={time}
          onChange={onChangeTime}
          name="time"
          placeholder="HH:MM (24H format)"
        />
      </div>
      <br />
      <button
        onClick={() => {
          picoPlacaPredictor(plate, date, time)
            ? alert("You are restricted")
            : alert("You are not restricted");
        }}
        className="btn btn-success"
      >
        Submit
      </button>
    </>
  );
};

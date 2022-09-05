import React from "react";
import "./styles.css";

export default function Form() {
  return (
    <div className="form">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city name.."
              className="form-control mt-3"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 mt-3"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

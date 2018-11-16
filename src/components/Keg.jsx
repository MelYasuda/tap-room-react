import React, { Component } from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <div className='col-md-3' style={{ width: 18 + "em" }}>
      <img className="card-img-top" src={props.photo} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          <p>{props.brand}</p>
          <p>{props.price}</p>
          <p>{props.abv}</p>
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Keg;

// Ticket.propTypes = {
//     names: PropTypes.string,
//     photo: PropTypes.string,
//     brand: PropTypes.string,
//     price: PropTypes.number,
//     abv: PropTypes.number,
//   };
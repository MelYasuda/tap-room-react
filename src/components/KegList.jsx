import React, { Component } from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
      <div className='row'>
        {props.kegList.map((keg, index) => (
          <Keg
            name={keg.name}
            photo={keg.photo}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
          />
        ))}
      </div>
  );
}

export default KegList;
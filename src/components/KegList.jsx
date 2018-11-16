import React, { Component } from "react";
import Keg from "./Keg";

function KegList(props) {
  return (
    <div className='row'>
      <div className="cl-md-12">
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
    </div>
  );
}

export default KegList;

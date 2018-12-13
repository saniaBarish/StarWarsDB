import React from "react";

import "./ItemDetails.css";

const ItemDetails = ({ item, getImage, record}) => {
    const {id, name} = item;
    return (
      <div className="person-details card">
         <img className="person-image"
          src={getImage(id)}
          alt="Loading..."
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
           {record(item)}
          </ul>
        </div>
      </div>
    )
  
}

export default ItemDetails;
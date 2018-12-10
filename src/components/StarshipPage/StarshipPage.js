import React from "react";

import ItemList from "../ItemList";
import StarshipDetails from "./StarshipDetails";

const StarshipPage = ({starshipId, getStarshipId, getData}) =>{
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList getItemId={getStarshipId} getData={getData}
          renderItem={({name}) => `${name}`}/>
        </div>
        <div className="col-md-6">
          {starshipId? <StarshipDetails id ={starshipId}/> : "Select a planet from a list"}
        </div>
      </div>
    )
}

export default StarshipPage;
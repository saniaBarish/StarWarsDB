import React from "react";

import ItemList from "../ItemList";
import PlanetDetails from "./PlanetDetails";

const PlanetPage = ({planetId, getPlanetId, getData}) =>{
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList getItemId={getPlanetId} getData={getData}
          renderItem={({name}) => `${name}`}/>
        </div>
        <div className="col-md-6">
          {planetId? <PlanetDetails id ={planetId}/> : "Select a planet from a list"}
        </div>
      </div>
    )
}

export default PlanetPage
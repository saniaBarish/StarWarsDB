import React from "react";

import ItemList from "../ItemList";
import PersonDetails from "./PersonDetails";

const PersonPage = ({personId, getPersonId , getData}) => {
    return(
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList 
            getItemId={getPersonId} 
            getData={getData}
            renderItem={({name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}/>
        </div>
        <div className="col-md-6">
          {personId? <PersonDetails id ={personId}/> : "Select a parson from a list"}
        </div>
      </div>
    )
}

export default PersonPage;
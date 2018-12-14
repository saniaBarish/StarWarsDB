import React from "react";
import {withRouter} from "react-router-dom"

import Row from "../Row";
import {PlanetList, PlanetDetails} from "../StarWarsComponent"

const PlanetPage = ({history, match}) =>{
    const { id } = match.params
    return(
        <Row 
            left={<PlanetList getItemId={(id) => history.push(id)}/>} 
            right={<PlanetDetails id={id}/>}
        />
    )   
}

export default withRouter(PlanetPage)
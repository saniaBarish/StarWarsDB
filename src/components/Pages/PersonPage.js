import React from "react";
import {withRouter} from "react-router-dom";

import Row from "../Row";
import {PersonList, PersonDetails} from "../StarWarsComponent"

const PersonPage = ({history, match}) =>{
    const {id} = match.params;

    return(
        <Row 
            left={<PersonList getItemId={(id) => history.push(id)}/>} 
            right={<PersonDetails id={id}/>}
        />
    )

}

export default withRouter(PersonPage);
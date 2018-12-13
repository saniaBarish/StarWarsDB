import React from "react";
import {SwapiServiceConsumer} from "../SwapiServiceContext"

const withSwapiServiceConsumer = (mapMethodsToProps) => (View) => (props) =>{
    return(
        <SwapiServiceConsumer>
            {(swapiService) => mapMethodsToProps(View, props, swapiService)}
        </SwapiServiceConsumer>
    )   
}

export default withSwapiServiceConsumer;
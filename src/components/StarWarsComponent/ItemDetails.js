import React from "react";

import ItemDetails from "../ItemDetails";
import { withDetails } from "../HocHelper";
import SwapiService from "../../services/SwapiService";
import {SwapiServiceConsumer} from "../SwapiServiceContext";



const { getPlanet, getPlanetImage, getStarships, getStarshipImage} = new SwapiService();

const withSwapiServiceConsumer = (View, ...arg) =>{
    return (props) =>{
        return(
            <SwapiServiceConsumer>
                {
                    (swapiService) =>{  
                        return <View {...props} getData={swapiService[arg[0]]} getImage={swapiService[arg[1]]}/>
                    }
                }
            </SwapiServiceConsumer>
        )   
    }
}

const PersonDetails = withSwapiServiceConsumer(withDetails(ItemDetails), "getPerson", "getPersonImage");

const PlanetDetails = withDetails(ItemDetails, getPlanet, getPlanetImage);

const StarshipDetails = withDetails(ItemDetails, getStarships, getStarshipImage);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
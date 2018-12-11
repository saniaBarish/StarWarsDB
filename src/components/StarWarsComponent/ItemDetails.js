import React from "react";

import ItemDetails from "../ItemDetails";
import { withDetails, withRecord } from "../HocHelper";
import SwapiService from "../../services/SwapiService";

const {getPerson, getPersonImage, getPlanet, getPlanetImage, getStarships, getStarshipImage} = new SwapiService();

const PersonDetails = withDetails(ItemDetails, getPerson, getPersonImage);

const PlanetDetails = withDetails(ItemDetails, getPlanet, getPlanetImage);

const StarshipDetails = withDetails(ItemDetails, getStarships, getStarshipImage);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
import React from "react";

import ItemList from "../ItemList";
import { withData } from "../HocHelper";
import SwapiService from "../../services/SwapiService";

const {getAllPerson, getAllPlanets, getAllStarships} = new SwapiService();

const PersonList = withData(ItemList, getAllPerson);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}
import React from "react";

import ItemList from "../ItemList";
import { 
    withData, 
    compose, 
    withSwapiServiceConsumer,
    mapAllPersonMethodsToProps,
    mapAllPlanetMethodsToProps,
    mapAllStarshipMethodsToProps,
    withRanderChildren
} from "../HocHelper";

const renderPerson = ({ name }) => <span> {name} </span>

const renderPlanet = ({name, diameter}) => <span>{name} (Diameter: {diameter})</span>

const renderStarship = ({name, model}) => <span>{name} (Model: {model})</span>

const PersonList = compose(
    withSwapiServiceConsumer(mapAllPersonMethodsToProps),
    withData,
    withRanderChildren(renderPerson)
)(ItemList);

const PlanetList = compose(
    withSwapiServiceConsumer(mapAllPlanetMethodsToProps),
    withData,
    withRanderChildren(renderPlanet)
)(ItemList);

const StarshipList = compose(
    withSwapiServiceConsumer(mapAllStarshipMethodsToProps),
    withData,
    withRanderChildren(renderStarship)
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}
import React from "react";

import ItemList from "../ItemList";
import { withData } from "../HocHelper";
import SwapiService from "../../services/SwapiService";

const {getAllPerson, getAllPlanets, getAllStarships} = new SwapiService();

const withRanderChildren = (List, renderFunc) => {
    return (props) =>{
        return (
            <List {...props}>
                {renderFunc}
            </List>
        )
    }
}

const renderName = ({ name }) => <span> {name} </span>

const PersonList = withData(withRanderChildren(ItemList, renderName), getAllPerson);

const PlanetList = withData(ItemList, getAllPlanets);

const StarshipList = withData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}
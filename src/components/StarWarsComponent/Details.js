import ItemDetails from "../ItemDetails";
import { 
    withDetails, 
    withSwapiServiceConsumer,
    mapPersonMethodsToProps,
    mapPlanetMethodsToProps,
    mapStarshipMethodsToProps,
    compose
} from "../HocHelper";

const PersonDetails = compose(
    withSwapiServiceConsumer(mapPersonMethodsToProps),
    withDetails
)(ItemDetails)

const PlanetDetails = compose(
    withSwapiServiceConsumer(mapPlanetMethodsToProps),
    withDetails
)(ItemDetails)

const StarshipDetails = compose(
    withSwapiServiceConsumer(mapStarshipMethodsToProps),
    withDetails
)(ItemDetails)

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
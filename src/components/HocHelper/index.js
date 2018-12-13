import withSwapiServiceConsumer from "./withSwapiServiceConsumer";
import compose from "./compose";
import {withData} from "./withData";
import {withDetails} from "./withDetails";
import withRanderChildren from "./withRanderChildren";
import withRecord from "./withRecord"

import {
    mapPersonMethodsToProps,
    mapStarshipMethodsToProps,
    mapPlanetMethodsToProps,
    mapAllPersonMethodsToProps,
    mapAllPlanetMethodsToProps,
    mapAllStarshipMethodsToProps
} from "./methodsToProps";


export {
    withData, 
    withDetails,
    withSwapiServiceConsumer,
    mapPersonMethodsToProps,
    mapPlanetMethodsToProps,
    mapStarshipMethodsToProps,
    compose,
    mapAllPersonMethodsToProps,
    mapAllPlanetMethodsToProps,
    mapAllStarshipMethodsToProps,
    withRanderChildren,
    withRecord
};
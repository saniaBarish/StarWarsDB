import React from "react";

const mapPersonMethodsToProps = (View, props, swapiService) => {
    const {
        getPerson: getData,
        getPersonImage: getImage
    } = swapiService

    return <View {...props} getData={getData} getImage={getImage}/>
        
}

const mapPlanetMethodsToProps = (View, props, swapiService) => {
    const {
        getPlanet: getData,
        getPlanetImage: getImage
    } = swapiService

    return <View {...props} getData={getData} getImage={getImage}/>
        
}

const mapStarshipMethodsToProps = (View, props, swapiService) => {
    const {
        getStarship: getData,
        getStarshipImage: getImage
    } = swapiService

    return <View {...props} getData={getData} getImage={getImage}/>
        
}

const mapAllPersonMethodsToProps = (View, props, swapiService) => {
    const {
        getAllPerson: getData,
    } = swapiService

    return <View {...props} getData={getData}/>
        
}

const mapAllPlanetMethodsToProps = (View, props, swapiService) => {
    const {
        getAllPlanets: getData,
    } = swapiService

    return <View {...props} getData={getData}/>
        
}

const mapAllStarshipMethodsToProps = (View, props, swapiService) => {
    const {
        getAllStarships: getData,
    } = swapiService

    return <View {...props} getData={getData}/>
        
}

export {
    mapPersonMethodsToProps,
    mapPlanetMethodsToProps,
    mapStarshipMethodsToProps,
    mapAllPersonMethodsToProps,
    mapAllPlanetMethodsToProps,
    mapAllStarshipMethodsToProps
}
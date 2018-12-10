import React, {Component} from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PersonPage from "../PersonPage";
import SwapiService from "../../services/SwapiService";
import PlanetPage from "../PlanetPage";
import StarshipPage from "../StarshipPage";
import ErrorBoundry from "../ErrorBoundry";


import "./App.css";

export default class App extends Component {

  swapiService = new SwapiService();

  state ={
    personId: null,
    planetId: null,
    starshipId: null
  }

  getPersonId = (personId) => this.setState({personId});

  getPlanetId = (planetId) => this.setState({planetId});

  getStarshipId = (starshipId) => this.setState({starshipId});

  render(){
    const { personId, planetId, starshipId } = this.state;
    return (
      <div>
        <Header />
        <RandomPlanet />
        <ErrorBoundry>
          <PersonPage personId={personId} getPersonId={this.getPersonId} getData={this.swapiService.getAllPerson}/>
        </ErrorBoundry>
        <PlanetPage planetId={planetId} getPlanetId={this.getPlanetId} getData={this.swapiService.getAllPlanets}/>
        <StarshipPage starshipId={starshipId} getStarshipId={this.getStarshipId} getData={this.swapiService.getAllStarships}/>
      </div>
    );
  } 
};
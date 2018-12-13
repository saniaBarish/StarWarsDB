import React, {Component} from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import {PersonPage, PlanetPage, StarshipPage} from "../Pages";
import { SwapiServiceProvider } from "../SwapiServiceContext"
import {SwapiService} from "../../services";
import ErrorBoundry from "../ErrorBoundry";


import "./App.css";

export default class App extends Component {

  swapiService = new SwapiService();

  render(){
  
    return (
      <div>
        <ErrorBoundry>
          <SwapiServiceProvider value={this.swapiService}>
            <ErrorBoundry>
              <Header />
            </ErrorBoundry>
            <ErrorBoundry>
              <RandomPlanet />
              <PersonPage />
              <PlanetPage />
              <StarshipPage />
            </ErrorBoundry>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  } 
};
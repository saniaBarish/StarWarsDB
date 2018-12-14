import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import {PersonPage, PlanetPage, StarshipPage} from "../Pages";
import {StarshipDetails} from "../StarWarsComponent/Details"
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
          <Router>
            <div className="stardb-app">
            <ErrorBoundry>
              <Header />
            </ErrorBoundry>
            <ErrorBoundry>
              <RandomPlanet />
              <Switch>
                <Route path="/" 
                  render={() => <h2>Welcome to StarWars DB</h2>}
                  exact
                />
                <Route path="/person/:id?" component={PersonPage} />
                <Route path="/planet/:id?" component={PlanetPage} />
                <Route path="/starship/" exact component={StarshipPage} />
                <Route path="/starship/:id?" exact render={({match})=> {
                  const {id} = match.params
                  if (isNaN(+id / 1)){
                    return <h2>Page not found:(</h2>
                  }
                  return <StarshipDetails id={id}/>
                }} />
                <Route render={() => <h2>Page not found:(</h2>}/>
              </Switch>
            </ErrorBoundry>
            </div>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  } 
};
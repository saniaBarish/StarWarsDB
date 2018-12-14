import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"

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
  homePage = "/StarWarsDB"

  render(){
    return (
      <div>
        <ErrorBoundry>
          <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="stardb-app">
            <ErrorBoundry>
              <Header homePage={`${this.homePage}`}/>
            </ErrorBoundry>
            <ErrorBoundry>
              <RandomPlanet />
              <Switch>
                <Route path={this.homePage} 
                  render={() => <h2>Welcome to StarWars DB</h2>}
                  exact
                />
                <Route path={`${this.homePage}/person/:id?`} component={PersonPage} />
                <Route path={`${this.homePage}/planet/:id?`} component={PlanetPage} />
                <Route path={`${this.homePage}/starship/`} exact component={StarshipPage} />
                <Route path={`${this.homePage}/starship/:id?`} exact render={({match})=> {
                  const {id} = match.params
                  if (isNaN(id / 1)){
                    return <h2>Page not found:(</h2>
                  }
                  return <StarshipDetails id={id}/>
                }} />
                <Redirect to={`${this.homePage}/`} />
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
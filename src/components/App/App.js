import React, {Component} from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemPage from "../ItemPage";
import ItemDetails from "../ItemDetails";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PlanetDetails, 
  PersonDetails, 
  StarshipDetails
} from "../StarWarsComponent";
import SwapiService from "../../services/SwapiService";
import ErrorBoundry from "../ErrorBoundry";


import "./App.css";

export default class App extends Component {

  swapiService = new SwapiService();

  state ={
    itemId: null,
  }

  getItemId = (itemId) => {this.setState({itemId})};

  render(){
    const { itemId } = this.state;
    const {getPersonImage, getPerson, getPlanet, getPlanetImage} = this.swapiService;
    const personList = (
      <PersonList 
        getItemId={this.getItemId}>
        {({name, birthYear}) => `${name} (${birthYear})`}
      </PersonList>
    )

    const personDetails = <PersonDetails id={itemId}/>
    return (
      <div>
        <ErrorBoundry>
          <Header />
        </ErrorBoundry>
        <ErrorBoundry>
          <RandomPlanet />
        </ErrorBoundry>
        <ErrorBoundry>
          <ItemPage left={personList} right={personDetails}/>
        </ErrorBoundry>
      </div>
    );
  } 
};
import React, {Component} from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemPage from "../PersonPage";
import SwapiService from "../../services/SwapiService";
import ErrorBoundry from "../ErrorBoundry";


import "./App.css";

export default class App extends Component {

  swapiService = new SwapiService();

  state ={
    itemId: null,
  }

  getItemId = (itemId) => {this.setState({itemId})};

  getPerson = (id) =>{
    return this.swapiService.getPerson(id)
  }

  getPlanet = (id) =>{
    return this.swapiService.getPlanet(id)
  }

  render(){
    const { itemId } = this.state;
    const {getPersonImage, getPlanetImage, getStarshipImage} = this.swapiService;
    return (
      <div>
        <ErrorBoundry>
          <Header />
        </ErrorBoundry>
        <ErrorBoundry>
          <RandomPlanet />
        </ErrorBoundry>
        <ErrorBoundry>
          <ItemPage 
            itemId={itemId} 
            getItemId={this.getItemId} 
            getData={this.swapiService.getAllPerson}
            renderItem={({name, birthYear}) => `${name} (${birthYear})`}
            getItem={this.getPerson}
            getPersonImage={getPersonImage}/>
          {/* <ItemPage 
            itemId={itemId} 
            getItemId={this.getItemId} 
            getData={this.swapiService.getAllPlanets}
            renderItem={({name}) => `${name}`}
            getItem={this.getPlanet}/> */}
          {/* <ItemPage 
            itemId={itemId} 
            getItemId={this.getItemId} 
            getData={this.swapiService.getAllStarships}/> */}
        </ErrorBoundry>
      </div>
    );
  } 
};
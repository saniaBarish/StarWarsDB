import React, {Component} from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import SwapiService from "../../services/SwapiService";


import "./App.css";

export default class App extends Component {

  swapiService = new SwapiService();

  state ={
    personId: null
  }

  getPersonId = (personId) => this.setState({personId})
  

  render(){
    const { personId } = this.state;
    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList getPersonId={this.getPersonId} getData={this.swapiService.getAllPerson}/>
          </div>
          <div className="col-md-6">
            {personId? <PersonDetails id ={personId}/> : "Select a parson from a list"}
          </div>
        </div>
      </div>
    );
  } 
};
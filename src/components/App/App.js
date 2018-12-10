import React, {Component} from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";


import "./App.css";

export default class App extends Component {
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
            <ItemList getPersonId={this.getPersonId}/>
          </div>
          <div className="col-md-6">
            {personId? <PersonDetails id ={personId}/> : null}
          </div>
        </div>
      </div>
    );
  } 
};
import React, { Component } from 'react';

import SwapiService from "../../services/SwapiService";
import Spiner from "../Spiner";
import ErrorIndicator from "../ErrorIndicator";
import PlanetView from "./PlanetView";

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: null,
    err: false
  }

  componentDidMount(){
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
    // clearInterval(this.interval);
  }

  onError = (err) =>{
    this.setState({
      err: true
    })
  }

  updatePlanet = () =>{
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService.getPlanet(id)
    .then(planet => {
      this.setState({
        planet: planet,
        loading: false
      })
    })
    .catch(this.onError)
  }

  render() {

    const { planet, err } = this.state 

    const content = err ? <ErrorIndicator /> : <PlanetView planet={planet} />

    return (
      <div className="random-planet jumbotron rounded">
        {planet ? content : <Spiner />}
      </div>

    );
  }
}
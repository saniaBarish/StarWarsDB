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
    err: false,
    loading: true
  }

  componentDidMount(){
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
    // clearInterval(this.interval);
  }

  onError = () =>{
    this.setState({
      err: true,
      loading: false
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

    const { planet, err, loading } = this.state 

    const catchErr = err ? <ErrorIndicator/> : <PlanetView planet={planet} />

    const content = loading ? <Spiner /> : catchErr;

    return (
      <div className="random-planet jumbotron rounded">
        {content}
      </div>

    );
  }
}
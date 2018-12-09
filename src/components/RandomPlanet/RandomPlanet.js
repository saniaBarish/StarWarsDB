import React, { Component } from 'react';

import SwapiService from "../../services/SwapiService";
import Spiner from "../Spiner";
import ErrorIndicator from "../ErrorIndicator"

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    err: false
  }

  constructor(){
    super()
    this.updatePlanet();
  }

  onError = (err) =>{
    this.setState({
      err: true,
      loading: false
    })
  }

  updatePlanet(){
    const id = Math.floor(Math.random() * 20) + 1;
    this.swapiService.getPlanet(id)
    .then(planet => {
      this.setState({
        planet,
        loading: false
      })
    })
    .catch(this.onError)
  }

  render() {

    const { planet, loading, err } = this.state 

    const content = err ? <ErrorIndicator /> : <PlanetView planet={planet} />

    return (
      <div className="random-planet jumbotron rounded">
        {loading ? <Spiner /> : content}
      </div>

    );
  }
}

const PlanetView = ({planet}) =>{

  const {id, name, population, rotationPeriod, diameter} = planet;
  return(
    <React.Fragment>
      <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
             alt="Loading..." />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
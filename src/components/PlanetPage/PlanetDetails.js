import React,{Component} from "react";

import SwapiService from "../../services/SwapiService";
import Spiner from "../Spiner";
import ErrorIndicator from "../ErrorIndicator";
import PlanetView from "./PlanetView";

import "./PlanetDetails.css";

export default class PlanetDetails extends Component {

  swapiService = new SwapiService();

  state={
    planet: null,
    err: false,
    loading: true
  }

  onError = () =>{
    this.setState({
      err: true,
      loading: false
    })
  }

  componentDidMount(){
    if (!this.state.planet){
      this.updatePlanet(this.props.id)
    }
  }

  componentDidUpdate({id}){
    if (id !== this.props.id){
      this.setState({
        loading:true
      })
      this.updatePlanet(this.props.id);
    }
  }

  updatePlanet = (id) =>{
    this.swapiService.getPlanet(id)
    .then(planet => {
      this.setState({
        planet,
        loading: false
      });
    })
    .catch(this.onError)
  }

  render() {

    const { planet, err, loading } = this.state;

    const catchErr = err ? <ErrorIndicator /> : <PlanetView planet={planet} />;

    const content = loading ?  <Spiner /> : catchErr;

    return (
      <div className="person-details card">
        {content}
      </div>
    )
  }
}
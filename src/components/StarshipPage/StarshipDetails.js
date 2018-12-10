import React,{Component} from "react";

import SwapiService from "../../services/SwapiService";
import Spiner from "../Spiner";
import ErrorIndicator from "../ErrorIndicator";
import StarshipView from "./StarshipView";

import "./StarshipDetails.css";

export default class StarshipDetails extends Component {

  swapiService = new SwapiService();

  state={
    starship: null,
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
    if (!this.state.starship){
      this.updateStarship(this.props.id)
    }
  }

  componentDidUpdate({id}){
    if (id !== this.props.id){
      this.setState({
        loading:true
      })
      this.updateStarship(this.props.id);
    }
  }

  updateStarship = (id) =>{
    this.swapiService.getStarships(id)
    .then(starship => {
      this.setState({
        starship,
        loading: false
      });
    })
    .catch(this.onError)
  }

  render() {

    const { starship, err, loading } = this.state;

    const catchErr = err ? <ErrorIndicator /> : <StarshipView starship={starship} />;

    const content = loading ?  <Spiner /> : catchErr;

    return (
      <div className="person-details card">
        {content}
      </div>
    )
  }
}
import React,{Component} from "react";

import SwapiService from "../../services/SwapiService";
import Spiner from "../Spiner";
import ErrorIndicator from "../ErrorIndicator";
import PersonView from "./PersonView";

import "./PersonDetails.css";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state={
    person: null,
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
    if (!this.state.person){
      this.updatePerson(this.props.id)
    }
  }

  componentDidUpdate({id}){
    if (id !== this.props.id){
      this.setState({
        loading:true
      })
      this.updatePerson(this.props.id);
    }
  }

  updatePerson = (id) =>{
    this.swapiService.getPerson(id)
    .then(person => {
      this.setState({
        person,
        loading: false
      });
    })
    .catch(this.onError)
  }

  render() {

    const { person, err, loading } = this.state;

    const catchErr = err ? <ErrorIndicator /> : <PersonView person={person} />;

    const content = loading ?  <Spiner /> : catchErr;

    return (
      <div className="person-details card">
        {content}
      </div>
    )
  }
}
import React,{Component} from "react";

import SwapiService from "../../services/SwapiService";
import Spiner from "../Spiner";
import ErrorIndicator from "../ErrorIndicator";

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
      this.updatePerson(this.props.id);
    }
  }

  updatePerson = (id) =>{
    console.log("update")
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

const PersonView = ({person}) =>{
  const { id, name, gender, birthYear, eyeColor } = person; 
  return(
    <React.Fragment>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="Loading..."
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
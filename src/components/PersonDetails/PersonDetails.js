import React,{Component} from "react";

import SwapiService from "../../services/SwapiService";
import Spiner from "../Spiner";

import "./PersonDetails.css";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state={
    person: null
  }

  componentDidMount(){
    this.updatePerson();
  }

  updatePerson = () =>{
    this.swapiService.getPerson(1)
    .then(person => {
      this.setState({person});
    })
    // .catch(err => console.error(err))

  }

  render() {

    const { person } = this.state;

    const content = person ? <PersonView person={person} /> : <Spiner />

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
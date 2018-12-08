import React,{Component} from "react";

import SwapiService from "../../services/SwapiService"

import "./PersonDetails.css";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  constructor(){
    super();
    this.updatePerson();
  }

  state={
    id: null,
    name: null,
    gender: null,
    birthYear: null,
    eyeColor: null
  }

  updatePerson(){
    this.swapiService.getPerson(1)
    .then(person => {
      this.setState(person);
    })
    // .catch(err => console.error(err))

  }

  render() {

    const { id, name, gender, birthYear, eyeColor } = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="Loading..."/>

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
      </div>
    )
  }
}
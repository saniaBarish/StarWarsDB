import React, {Component} from "react";

import SwapiService from "../../services/SwapiService";




export default class StarshipDetails extends Component{
    swapiService = new SwapiService()

    constructor(){
        super();
        this.getStarship();
    }

    getStarship(){
        this.swapiService.getStarships(2)
        .then(starship => console.log(starship))
        .catch(err => console.error(err))
    }

    render(){
        return(
            <div>Hello world</div>
    //         <div className="person-details card">
    //     <img className="person-image"
    //       src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
    //       alt="Loading..."/>

    //     <div className="card-body">
    //       <h4>{name}</h4>
    //       <ul className="list-group list-group-flush">
    //         <li className="list-group-item">
    //           <span className="term">Gender</span>
    //           <span>{gender}</span>
    //         </li>
    //         <li className="list-group-item">
    //           <span className="term">Birth Year</span>
    //           <span>{birthYear}</span>
    //         </li>
    //         <li className="list-group-item">
    //           <span className="term">Eye Color</span>
    //           <span>{eyeColor}</span>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
        )
    }
}
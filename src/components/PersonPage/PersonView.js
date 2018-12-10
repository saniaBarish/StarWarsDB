import React from "react";

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
            <li className="list-group-item">
              <button onClick={() => {throw new Error("Crash")}}>Error</button>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
}

export default PersonView;
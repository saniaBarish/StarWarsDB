import React,{Component} from "react";

import "./ItemDetails.css";

class ItemDetails extends Component {
  render() {
    const {item, getImage } = this.props; 
    const {id, name} = item;
    return (
      <div className="person-details card">
         <img className="person-image"
          src={getImage(id)}
          alt="Loading..."
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) =>{
              return React.cloneElement(child, { item })
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default ItemDetails;
import React from "react";

const ItemRender = ({persons, getPersonId}) =>{
    return persons.map( ({id, name}) => {
      return(
        <li className="list-group-item"
            key = {id}
            onClick={()=> getPersonId(id)}
            >
          {name}
        </li>
      )
    })
}

export default ItemRender;
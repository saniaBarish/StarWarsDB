import React from "react";

const ItemRender = ({persons}) =>{
    return persons.map( ({id, name}) => {
      return(
        <li className="list-group-item"
            key = {id}>
          {name}
        </li>
      )
    })
}

export default ItemRender;
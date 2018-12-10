import React from "react";

const ItemRender = ({items, getItemId, renderItem}) =>{
    return items.map( (item) => {
      const {id} = item;
      return(
        <li className="list-group-item"
            key = {id}
            onClick={() => getItemId(id)}
            >
          {renderItem(item)}
        </li>
      )
    })
}

export default ItemRender;
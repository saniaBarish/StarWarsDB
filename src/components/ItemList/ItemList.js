import React from "react";

import "./ItemList.css";

const ItemList = (props) =>{

  const {data, getItemId, children: renderItem} = props;

  const items = data.map( (item) => {
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

  return (
    <div className="item-list">
    <ul className="item-list list-group">
      {items}
    </ul>
    </div>
  );
}

export default ItemList;
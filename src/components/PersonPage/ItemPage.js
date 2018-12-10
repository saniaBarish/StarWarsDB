import React from "react";

import ItemList from "../ItemList";
import ItemDetails from "./ItemDetails";


const ItemPage = ({itemId, getItemId , getData, renderItem, getItem, getPersonImage}) => {
  return(
    <div className="row mb2">
      <div className="col-md-6">
        <ItemList 
          getItemId={getItemId} 
          getData={getData}
          renderItem={renderItem}/>
      </div>
      <div className="col-md-6">
        {itemId? 
          <ItemDetails id ={itemId} getItem={getItem} getPersonImage={getPersonImage}>
            
          </ItemDetails> : 
          <ItemDetails id ={11} getItem={getItem} getPersonImage={getPersonImage}>
          </ItemDetails>}
      </div>
    </div>
  )
}

export default ItemPage;
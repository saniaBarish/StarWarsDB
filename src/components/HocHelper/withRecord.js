import React from "react";
import Record from "../Record";

const transformItemKey = (str) => {
    const arr = str.split("");
    const idx = arr.findIndex(item => item === item.toUpperCase())
    
    if(idx !== -1){
        const beforIdx = arr.slice(1, idx);
        const afterIdx = arr.slice(idx);
        return [arr[0].toUpperCase()].concat(beforIdx, [" "], afterIdx, [": "]).join("")
    }
    else {
        return [arr[0].toUpperCase()].concat(arr.slice(1), [": "]).join("")
    }
}



const withRecord = (item) => {
    const itemKey = item ? Object.keys(item) : [];
    return(
      itemKey.filter((field, idx) => idx).map((field) =>  {
        return <Record key={field} item={item} field={field} label={transformItemKey(field)}/>
      }) 
    )
    
} 

export default withRecord;
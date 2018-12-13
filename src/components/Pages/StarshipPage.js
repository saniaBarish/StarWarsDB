import React, {Component} from "react";

import Row from "../Row";
import {StarshipList, StarshipDetails} from "../StarWarsComponent"

export default class StarshipPage extends Component{

    state={
        selectedItem: null,
    }

    onItemSelect = (selectedItem) => this.setState({selectedItem})

    render(){

        const { selectedItem } = this.state;

        return(
            <Row 
                left={<StarshipList getItemId={this.onItemSelect}/>} 
                right={<StarshipDetails id={selectedItem}/>}
            />
        )
    }
}
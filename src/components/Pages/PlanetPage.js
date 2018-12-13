import React, {Component} from "react";

import Row from "../Row";
import {PlanetList, PlanetDetails} from "../StarWarsComponent"

export default class PlanetPage extends Component{

    state={
        selectedItem: null,
    }

    onItemSelect = (selectedItem) => this.setState({selectedItem})

    render(){

        const { selectedItem } = this.state;

        return(
            <Row 
                left={<PlanetList getItemId={this.onItemSelect}/>} 
                right={<PlanetDetails id={selectedItem}/>}
            />
        )
    }
}
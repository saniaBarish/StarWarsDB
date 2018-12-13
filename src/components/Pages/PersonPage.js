import React, {Component} from "react";

import Row from "../Row";
import {PersonList, PersonDetails} from "../StarWarsComponent"

export default class PersonPage extends Component{

    state={
        selectedItem: null,
    }

    onItemSelect = (selectedItem) => this.setState({selectedItem})

    render(){

        const { selectedItem } = this.state;

        return(
            <Row 
                left={<PersonList getItemId={this.onItemSelect}/>} 
                right={<PersonDetails id={selectedItem}/>}
            />
        )
    }
}
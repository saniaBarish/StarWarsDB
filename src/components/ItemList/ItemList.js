import React,{Component} from "react";

import SwapiService from "../../services/SwapiService";
import Spiner from "../Spiner";
import ErrorIndicator from "../ErrorIndicator";
import ItemRender from "./ItemRender";

import "./ItemList.css";

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    persons: null,
    err: false
  }

  componentDidMount(){
    this.swapiService
      .getAllPerson()
      .then(persons => {
        this.setState({
          persons: persons
        })
      })
      .catch(err =>{
        this.setState({
          err: true
        })
      })
  }

  

    render() {
      const { persons, err } = this.state;
      const content = err ? <ErrorIndicator /> : <ItemRender persons = {persons} />;
      return (
        <ul className="item-list list-group">
          {persons ? content : <Spiner />}
        </ul>
      );
    }
}
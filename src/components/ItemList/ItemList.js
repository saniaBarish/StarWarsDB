import React,{Component} from "react";

import SwapiService from "../../services/SwapiService";
import Spiner from "../Spiner";
import ErrorIndicator from "../ErrorIndicator";
import ItemRender from "./ItemRender";

import "./ItemList.css";

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    err: false,
    loading: true
  }

  componentDidMount(){
    this.props.getData()
    .then(item => {
      this.setState({
        item,
        loading: false
      })
    })
    .catch(err =>{
      this.setState({
        err: true,
        loading: false
      })
    })
  }

  render() {
    const { item, err, loading } = this.state;
    const { getPersonId } = this.props;
    const catchError = err ? <ErrorIndicator /> : <ItemRender persons = {item} getPersonId={getPersonId}/>;
    const content = loading ? <Spiner /> : catchError;
    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    );
  }
}
import React,{Component} from "react";

import Spiner from "../Spiner";
import ErrorIndicator from "../ErrorIndicator";
import ItemView,{Record} from "./ItemView";

import "./ItemDetails.css";

export default class ItemDetails extends Component {

  state={
    item: null,
    err: false,
    loading: true
  }

  onError = () =>{
    this.setState({
      err: true,
      loading: false
    })
  }

  componentDidMount(){
    if (!this.state.item){
      this.updateItem(this.props.id)
    }
  }

  componentDidUpdate({id}){
    if (id !== this.props.id){
      this.setState({
        loading:true
      })
      this.updateItem(this.props.id);
    }
  }

  updateItem = (id) =>{
    this.props.getItem(id)
    .then(item => {
      this.setState({
        item,
        loading: false
      });
    })
    .catch(this.onError)
  }

  render() {

    const { item, err, loading } = this.state;
    const {getPersonImage} = this.props;
    const catchErr = err ? <ErrorIndicator /> : 
      <ItemView item={item} getPersonImage={getPersonImage}> 
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
      </ItemView>;

    const content = loading ?  <Spiner /> : catchErr;

    return (
      <div className="person-details card">
        {content}
      </div>
    )
  }
}
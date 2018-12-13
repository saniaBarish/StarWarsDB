import React,{Component} from "react";

import ErrorIndicator from "../ErrorIndicator";
import Spiner from "../Spiner";
import {withRecord} from "../HocHelper"


const withDetails = (View) =>{
    return class extends Component{
  
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
            loading: true
          });
          this.updateItem(this.props.id);
        }
      }
    
      updateItem = (id) =>{
        if(!id){
          id = 11;
        }
        this.props.getData(id)
        .then(item => {
          this.setState({
            item,
            loading: false
          });
        })
        .catch(this.onError)
      }
      
      render(){
        const { item, err, loading } = this.state;
        const {getImage} = this.props;
        const catchErr = err ? <ErrorIndicator /> : <View item={item} getImage={getImage} record={withRecord} />;
        const content = loading ?  <Spiner /> : catchErr;
  
        return content
      }
    }
}

export {withDetails}
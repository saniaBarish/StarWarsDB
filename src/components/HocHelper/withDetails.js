import React,{Component} from "react";
import PropTypes from "prop-types"

import ErrorIndicator from "../ErrorIndicator";
import Spiner from "../Spiner";
import {withRecord} from "../HocHelper"


const withDetails = (View) =>{
    return class extends Component{

      static propTypes = {
        id: PropTypes.string
      }
  
      state={
        item: null,
        err: false,
        loading: true,
        start: true
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
        if (this.props.id){
          this.setState({
            start: false
          })
        }
      }
    
      componentDidUpdate({id}){
        if (id !== this.props.id){
          this.setState({
            loading: true,
            start: false
          });
          this.updateItem(this.props.id);
        }
      }
    
      updateItem = (id) =>{
        if(id){
          this.props.getData(id)
        .then(item => {
          this.setState({
            item,
            loading: false
          });
        })
        .catch(this.onError)
        }
        
      }
      
      render(){
        const { item, err, loading, start } = this.state;
        if(start){
          return (
            <span className="person-details card">
              <span>Select item from a list</span>
            </span>
          )
        }
        const {getImage} = this.props;
        const catchErr = err ? <ErrorIndicator /> : <View item={item} getImage={getImage} record={withRecord} />;
        const content = loading ?  <Spiner /> : catchErr;
  
        return content
      }
    }
}

export {withDetails}
import React, {Component} from "react";

import ErrorIndicator from "../ErrorIndicator";
import Spiner from "../Spiner" 

const withData = (View) =>{
    return class extends Component{
  
      state = {
        data: null,
        err: false
      }
    
      componentDidMount(){
        this.props.getData()
        .then(data => {
          this.setState({
            data
          })
        })
        .catch(err =>{
          this.setState({
            err: true
          })
        })
      }
  
      render(){
        const { data, err } = this.state;
  
        if (err){
          return <ErrorIndicator />
        }
        else if (!data){
          return <Spiner />
        }
        
        return <View {...this.props} data={data}/>
      }
    }
}

export  {
    withData
}
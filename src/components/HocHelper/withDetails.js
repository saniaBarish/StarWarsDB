import React,{Component} from "react";

import ErrorIndicator from "../ErrorIndicator";
import Spiner from "../Spiner";
import Record from "../Record";


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
        // console.log(this.props)
        const {getImage} = this.props;
        
        const itemKey = item ? Object.keys(item) : [];
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
        const view =(
          <View item={item} getImage={getImage}>
              {itemKey.filter((field, idx) => idx).map((field) =>  <Record key={field} field={field} label={transformItemKey(field)}/>)}
          </View>
        )

        const catchErr = err ? <ErrorIndicator /> : view;
        const content = loading ?  <Spiner /> : catchErr;
  
        return content
      }
    }
}

export {withDetails}
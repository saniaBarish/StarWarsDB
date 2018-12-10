import React,{Component} from "react";

export default class ErrorBtn extends Component{
    state={
        onError: false
    }

    render(){
        if(this.state.onError){
            this.foo.bar = 0
        }

        return(
            <button
            onClick={()=> this.setState({onError:true})}>
                Throw Error
            </button>
        )
    }
}
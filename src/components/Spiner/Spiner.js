import React, {Component} from "react";


import "./Spiner.css";

export default class Spiner extends Component{

    render(){
        return(
            <div className="lds-css ng-scope">
                <div className="lds-double-ring">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
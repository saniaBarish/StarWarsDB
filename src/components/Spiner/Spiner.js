import React, {Component} from "react";


import "./Spiner.css";

export default class Spiner extends Component{

    render(){
        return(
            <div class="lds-css ng-scope">
                <div class="lds-double-ring">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
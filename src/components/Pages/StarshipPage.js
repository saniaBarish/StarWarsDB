import React from "react";
import {withRouter} from "react-router-dom";

import {StarshipList} from "../StarWarsComponent"

const StarshipPage = ({ history }) => <StarshipList getItemId={(id) => history.push(id)}/>

export default withRouter(StarshipPage)
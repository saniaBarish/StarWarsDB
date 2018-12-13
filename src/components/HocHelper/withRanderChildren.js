import React from "react";

const withRanderChildren = (renderFunc) => (List) => (props) =>{
    return (
        <List {...props}>
            {renderFunc}
        </List>
    )
}

export default withRanderChildren
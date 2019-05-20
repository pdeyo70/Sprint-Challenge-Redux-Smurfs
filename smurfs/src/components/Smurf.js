import React from "react";


const Smurf = props => {
    return <div>
            <h4>{props.smurf.name}</h4>
            <li>{props.smurf.age}</li>
            <li>{props.smurf.height}</li>
            </div>
};

export default Smurf;
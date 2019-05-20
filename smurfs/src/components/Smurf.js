import React from "react";


const Smurf = props => {
    return <div>
            <h3>{props.smurf.name}</h3>
            <li>{props.smurf.age}</li>
            <li>{props.smurf.height}</li>
            </div>
};

export default Smurf;
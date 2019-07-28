import React from "react";

import Smurf from "./Smurf";

const SmurfList = props => {
    return (
        <ul>
            {props.smurfs.map((smurf, id) => {
                return <Smurf key={id} smurf={smurf} />;
            })}
        </ul>
    );
};

export default SmurfList;
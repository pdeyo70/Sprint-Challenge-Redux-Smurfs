import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const SMURFING_SMURFS = 'SMURFING_SMURFS';  //SMURFING translates to DISPLAYING, a bit of humor
export const ADD_SMURF = 'ADD_SMURF';
export const FAILED_TO_SMURF = 'FAILED_TO_SMURF';

/*
  For this project you'll need at least 2 action creators for the main portion,
  and 2 more for the stretch problem.
  Be sure to include action types for each type of action creator. Also, be sure to mind
    the "pending" states like, fetching, creating, updating and deleting.
  C - addSmurf
  R - getSmurfs
  U - updateSmurf
  D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res =>
      dispatch({ type: SMURFING_SMURFS, payload: res.data }))
    .catch(err =>
      dispatch({ type: FAILED_TO_SMURF, payload: err }))
}

export function addSmurf(newSmurf){
  return {
    type: 'ADD_SMURF',
    payload: newSmurf
  }
}

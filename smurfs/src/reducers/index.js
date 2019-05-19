/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_SMURFS, ADD_SMURF, SMURFING_SMURFS, FAILED_TO_SMURF } from '../actions';


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */

const initialState = {
  smurfs: [],
  smurf: {
    name: '',
    age: '',
    height: '',
    id: ''
  },
  fetchingSmurfs: false,
  addingSmurf: false,
  /*updatingSmurf: false
  deletingSmurf: false*/
  error: null
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
    case SMURFING_SMURFS:
      return {
        ...state,
        smurfs: [...state.smurfs, ...action.payload],
        fetchingSmurfs: false,
        error: ''
      }
    case ADD_SMURF:
      const newSmurf = {
        name: action.payload,
        age: action.payload,
        height: action.payload
      }
      return {
        ...state,
        addingSmurf: true,
        smurfs: [...state.smurfs, newSmurf]
      };
      console.log(action.payload)
    case FAILED_TO_SMURF:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      }
    default:
      return state;
  }
};